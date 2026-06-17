import http.server
import socketserver

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

class MyHTTPRequestHandler(Handler):
    # Enable cache control headers for local development
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

if __name__ == '__main__':
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"==================================================")
        print(f" Sunshine Web Server en linea: http://localhost:{PORT}")
        print(f" Presiona CTRL+C para detener el servidor")
        print(f"==================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nDeteniendo el servidor...")
