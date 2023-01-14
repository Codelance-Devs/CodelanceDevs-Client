import Head from "next/head";
import React from "react";
import PublicLayout from "../../layouts/public";

const Design = () => {
    return (
        <>
            <Head>
                <title>Design</title>
            </Head>
            <PublicLayout>
                <div className="mx-auto flex w-full max-w-[1440px] flex-col px-3 pt-28 pb-16 md:px-5 md:pt-32 md:pb-16 lg:min-h-[100vh] lg:px-[5vw] lg:py-[148px]">
                    <h1 className="mb-4 select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]">
                        Design
                    </h1>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Numquam unde nemo optio doloribus perspiciatis
                            minus quis fugit doloremque ab, nam neque ad tenetur
                            illo fugiat. Modi maxime sed voluptate reiciendis?
                        </p>
                    </div>
                </div>
            </PublicLayout>
        </>
    );
};

export default Design;
