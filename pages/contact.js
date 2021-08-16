import Head from "next/head";
export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <main className="container">
                <h1 className="heading text-center">Contact Me</h1>
                <form>
                    <input type="text" placeholder="john doe" name="" id="" />
                    <input type="email" placeholder="john@gmail.com" id="" />
                    <textarea placeholder="fill free " id="" cols="30" rows="10"></textarea>
                    <button className="btn-primary">Submit</button>
                </form>
            </main>
        </>
    )
}