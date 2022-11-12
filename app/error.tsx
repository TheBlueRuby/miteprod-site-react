"use client";

import Link from "next/link";

function Error({ error, reset }) {
    return (
        <div>
            <h1>ERROR!</h1>
            <p>An error occured! Details are as follows:</p>
			<code>
				{error.message}
			</code>
            <p>
                <Link href="/">Go to homepage</Link>
            </p>
        </div>
    );
}

export default Error;
