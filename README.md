# chatgpt-experiments

This repo contains some experiments trying to get <chat.openai.com/> to help create applications for documentary linguistics. 

It’s a bit of a mess right now but I figured I’d throw it up.

To try the code, you will need to run a local server.

Here’s how ChatGPT thinks you can do that 🥴:

> One way to run a local server for development is to use a tool like the Python SimpleHTTPServer module. To use this module, you would first need to have Python installed on your computer. Once you have Python installed, you can use the following steps to run a local server:
>
> 1. Open a terminal or command prompt and navigate to the directory where your website files are stored.
> 2. Run the following command: python -m SimpleHTTPServer
> 3. This will start a local server on port 8000. You can access the server by visiting http://localhost:8000 in your web browser.

Or for Javascript, if you ask:

> How can I run a simple HTTP server for localhost development with node.js or deno?

Then ChatGPT says:

> To run a simple HTTP server for local development with node.js, you can use the http-server package. This package provides a simple command-line interface for starting an HTTP server, which you can then use to serve files from your local machine.
> Here are the basic steps to start an HTTP server for local development using node.js:
>
>     Install the http-server package using npm. You can do this by running the following command:
>
> $ npm install http-server -g
>
>     Once the http-server package is installed, you can start the server by running the http-server command. This will start the server and listen for incoming requests on port 8080 by default.
>     To access your local development server, you can open a web browser and navigate to http://localhost:8080. This will bring up the default http-server page, which shows a directory listing of the files in the current directory.
> Alternatively, you can use the deno command to start a local HTTP server with deno. This is done using the --serve flag, which tells deno to start a local HTTP server and serve files from the current directory. For example, to start an HTTP server on port 8000 with deno, you can run the following command:
>
> $ deno run --allow-net --serve
>
> This will start a local HTTP server on port 8000, which you can access in your web browser at http://localhost:8000.
> I hope this helps! Let me know if you have any other questions.

This advice is 100% accurate. 🥴

Brave new world…
