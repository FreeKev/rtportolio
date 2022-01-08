import { Helmet } from 'react-helmet'
import React from 'react'

export default function InsertScript() {
    return (
        <Helmet>
            <script>
                document.querySelector('footer').lastChild.style.display = 'none';
            </script>
        </Helmet>
    )
}
