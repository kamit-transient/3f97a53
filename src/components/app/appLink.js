

import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import { useContextualRouting } from 'next-use-contextual-routing'

function AppLink({ href, as, children, component, ...other }) {
    const router = useRouter();
    const { returnHref, makeContextualHref } = useContextualRouting();
    return (
        <Link href={href} {...other}>
            <a >{children}</a>
        </Link>
    )
}


AppLink.prototype = {
    href: PropTypes.string.isRequired

}

export default AppLink
