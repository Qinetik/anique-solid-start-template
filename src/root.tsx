// @refresh reload
import {Suspense} from 'solid-js'
import {Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title} from 'solid-start'
import {AniqueThemeAutoSetup} from "@qinetik/anique";

export default function Root() {
    return (
        <Html lang="en" class={"dark"}>
            <Head>
                <Title>SolidStart - With Anique</Title>
                <Meta charset="utf-8"/>
                <Meta name="viewport" content="width=device-width, initial-scale=1"/>
                <AniqueThemeAutoSetup />
            </Head>
            <Body>
                <ErrorBoundary>
                    <Suspense>
                        <Routes>
                            <FileRoutes/>
                        </Routes>
                    </Suspense>
                </ErrorBoundary>
                <Scripts/>
            </Body>
        </Html>
    )
}
