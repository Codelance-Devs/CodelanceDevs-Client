import React from "react";

const Contact = () => {
    const handleContactFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <section
            className="w-full scroll-mt-36 bg-primary text-white"
            id="getQuote"
        >
            <div className="mx-auto w-full max-w-[1440px] px-3 py-16 md:px-5 lg:px-[5vw] lg:py-[148px]">
                <div className="flex w-full flex-col items-stretch justify-start lg:flex-row lg:gap-10">
                    <div className="w-full p-2 lg:p-4">
                        <div className="text-center md:text-left">
                            <h4 className="mb-4 text-[32px] font-medium md:text-[34px] lg:text-[40px]">
                                Need help in building your ideas? Drop us a{" "}
                                <span className="h-fit w-fit bg-[url('/underline-white.svg')] bg-bottom bg-no-repeat">
                                    line
                                </span>{" "}
                                with your request.
                            </h4>
                            <p className="text-justify text-[16px]">
                                Take the first step towards launching a
                                successful web app by contacting our team of
                                skilled web developers. We can&apos;t wait to hear
                                about your idea!
                            </p>
                        </div>
                    </div>
                    <div className="w-full p-2 lg:p-4">
                        <form className="flex flex-col gap-4">
                            <input
                                type="text"
                                name=""
                                id=""
                                className="w-full rounded-lg bg-slate-500 bg-opacity-20 p-4 text-white outline-none placeholder:text-white focus:outline focus:outline-slate-200"
                                placeholder="Name"
                            />
                            <input
                                type="email"
                                name=""
                                id=""
                                className="w-full rounded-lg bg-slate-500 bg-opacity-20 p-4 text-white outline-none placeholder:text-white focus:outline focus:outline-slate-200"
                                placeholder="Email"
                            />
                            <p>What service&apos;s are you looking for?</p>
                            <div className="flex items-center gap-4">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="service"
                                        value="development"
                                        className="mr-2 h-4 w-4"
                                    />
                                    <span>Development</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="service"
                                        value="design"
                                        className="mr-2 h-4 w-4"
                                    />
                                    <span>Design</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="service"
                                        value="template"
                                        className="mr-2 h-4 w-4"
                                    />
                                    <span>Template</span>
                                </label>
                            </div>
                            <textarea
                                name=""
                                id=""
                                className="max-h-32 w-full overflow-auto rounded-lg bg-slate-500 bg-opacity-20 p-4 text-white outline-none placeholder:text-white focus:outline focus:outline-slate-200"
                                placeholder={"Got any message for us?"}
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-white py-[20px] px-[64px] text-primary transition-all duration-300 hover:bg-slate-100 md:w-fit lg:mx-auto"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
