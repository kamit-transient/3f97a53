import store from "store2";

export async function authenticate() {
    let res = await fetch(process.env.WORDPRESS_API_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                query: `mutation loginMutation($user: String!, $pass: String!) {
                login(input: {password: $pass, username: $user}) {
                  authToken
                  refreshToken
                  clientMutationId
                }
              }`,
                variables: {
                    "user": process.env.BUILD_USR,
                    "pass": process.env.BUILD_PASS
                }
            }
        )
    });

    let json = await res.json();
    // console.log("auth json", json);
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json?.data;


}


export async function getItem(auth, query, variables) {

    let reqBody = getPostBody(variables, query);

    let res = await fetch(process.env.WORDPRESS_API_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth.login.authToken}`
        },
        body: JSON.stringify(
            {
                query: `
            query qq($Size: Int){
              allPost:   posts(first: $Size, where: {stati :PRIVATE,orderby: {field: DATE, order: ASC}}) {
                nodes {
                  title
                  excerpt
                  link
                  featuredImage {
                    node {
                      altText
                      caption
                      srcSet
                    }
                  }
                  topics: categories {
                    nodes {
                      name
                      link
                    }
                  }
                  tags {
                    nodes {
                      name
                      link
                    }
                  }
                }
              }
            }
    
          `,
                variables: {
                    "Size": +process.env.POSTS_PER_PAGE
                }
            }
        )
    });

    let json = await res.json();
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json?.data;

}

export async function getPosts(auth, query, variables) {


    let postBody = getPostBody(variables, query);

    let res = await fetch(process.env.WORDPRESS_API_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth.login.authToken}`
        },
        body: JSON.stringify(
            postBody
        )
    });

    let json = await res.json();
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json?.data;

}


function getPostBody(variables, query) {
    let postBody = null;

    if (!variables) {
        variables = "";
        postBody = {
            query: query,
        };
    } else {
        postBody = {
            query: query,
            variables
        };
    }
    return postBody;
}

export async function authenticatedPipeLine() {


    let auth_token = store(process.env.AUTH_TOKEN);

    let auth = null;
    if (auth_token) {
        console.log("using previous token");
        auth = JSON.parse(auth_token);
    }
    else {
        console.log("calling auth mutation");
        auth = await authenticateAndStoreToken()
    }

    // let data = null;
    // try {
    //     data = functionToBeCalled();

    // } catch (error) {
    //     authenticateAndStoreToken();
    //     data = functionToBeCalled();
    // }

    // return data;

    return async function (functionToBeCalled, ...params) {
        let data = null;
        try {
            data = await functionToBeCalled(auth, ...params);

        } catch (error) {
            auth = await authenticateAndStoreToken();
            data = await functionToBeCalled(auth, ...params);
        }

        return data;

        // return await functionToBeCalled(auth, ...params);


    }

}


export async function authenticateAndStoreToken() {
    let auth = null;
    auth = await authenticate();
    store(process.env.AUTH_TOKEN, JSON.stringify(auth))

    return auth;
}