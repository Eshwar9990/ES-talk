import SimpleHTTPServer
import SocketServer

class WasmHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def end_headers(self):
        # self.send_header("Cross-Origin-Opener-Policy", "same-origin")
        # self.send_header("Cross-Origin-Embedder-Policy", "require-corp")
        SimpleHTTPServer.SimpleHTTPRequestHandler.end_headers(self)


WasmHandler.extensions_map['.wasm'] = 'application/wasm'

if __name__ == '__main__':
    PORT = 8080
    httpd = SocketServer.TCPServer(("", PORT), WasmHandler)
    print("Listening on port {}. Press Ctrl+C to stop.".format(PORT))
    httpd.serve_forever()

