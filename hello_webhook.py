import modal

app = modal.App("hello-webhook")

# Define the container image with dependencies
image = modal.Image.debian_slim().pip_install("fastapi")

@app.function(image=image)
@modal.asgi_app()
def webhook():
    from fastapi import FastAPI, Query
    
    web_app = FastAPI()
    
    @web_app.get("/")
    @web_app.post("/")
    def hello(name: str = Query(default="World")):
        import re
        # Extract first name, handling both spaces and + signs
        first_name = re.split(r'[ +]', name.strip())[0]
        return {
            "message": f"Hey, {first_name}",
            "status": "success"
        }
    
    return web_app
