# How to Configure "Respond to Webhook" Node

This node gives you full control over the API response sent back to your Next.js app.

---

## 🎯 When to Use This

Use the **Respond to Webhook** node when you need to:
- ✅ Return custom data structure (e.g., `{ success: true, data: ... }`)
- ✅ Set specific HTTP status codes (e.g., 200, 400, 500)
- ✅ Add custom headers (e.g., `Set-Cookie`, `Content-Type`)
- ✅ Handle errors gracefully
- ✅ Redirect users to another page

---

## ⚙️ Configuration Guide

### 1. Basic Setup (JSON Response)

**Recommended for most API endpoints.**

- **Respond With**: `JSON`
- **Response Body**:
  ```json
  {
    "success": true,
    "message": "Operation completed",
    "data": {{ $json.body }}
  }
  ```

### 2. Available "Respond With" Options

| Option | Use Case | Example |
|--------|----------|---------|
| **First Incoming Item** | Simple pass-through | Returns exact data from previous node |
| **JSON** | Custom API structure | REST API endpoints |
| **Text** | Simple text response | "OK", "Received" |
| **Binary** | File downloads | Generating PDFs, Images |
| **Redirect** | Browser navigation | After form submission, login |
| **No Data** | 200 OK only | Webhooks where response doesn't matter |

---

## 🧪 Common Patterns

### Pattern A: Success & Error Handling (Try-Catch)

Structure your workflow to handle both success and failure:

```mermaid
graph LR
    A[Webhook] --> B[Process Data]
    B --> C{Success?}
    C -- Yes --> D[Respond: Success (200)]
    C -- No --> E[Respond: Error (400/500)]
```

**Success Response Node:**
- **Respond With**: JSON
- **Response Body**:
  ```json
  {
    "success": true,
    "data": {{ $json }}
  }
  ```
- **Options** → **Response Code**: `200`

**Error Response Node:**
- **Respond With**: JSON
- **Response Body**:
  ```json
  {
    "success": false,
    "error": "Validation failed",
    "details": {{ $json.message }}
  }
  ```
- **Options** → **Response Code**: `400` or `500`

---

### Pattern B: Redirect After Submission

Great for classic HTML forms (not needed for Next.js API routes).

- **Respond With**: Redirect
- **Redirect URL**: `https://myapp.com/thank-you`
- **Response Code**: `302` (Found) or `301` (Moved Permanently)

---

## 🔧 Advanced Configuration (Options)

Click **"Add Option"** to see these:

### 1. Response Code
Set the HTTP status code.
- `200`: OK (Default)
- `201`: Created (for `POST` requests)
- `400`: Bad Request (Invalid input)
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal Server Error

### 2. Response Headers
Add custom HTTP headers.
- **Name**: `Cache-Control` | **Value**: `no-cache`
- **Name**: `Content-Type` | **Value**: `application/json`

---

## 🚀 Integration with Next.js

### Next.js API Route Handling

When you use **Respond to Webhook**, your Next.js code should expect the structure you defined.

**n8n Config:**
```json
{
  "success": true,
  "user": {
    "id": 123,
    "name": "John"
  }
}
```

**Next.js Code:**
```typescript
const response = await fetch('http://localhost:5678/webhook/user');
const result = await response.json();

if (result.success) {
  console.log("User created:", result.user.name);
} else {
  console.error("Error:", result.error);
}
```

---

## 📝 Example Configuration

Here is the JSON for a standard **Respond to Webhook** node you can copy-paste into n8n:

```json
{
  "name": "Respond to Webhook",
  "type": "n8n-nodes-base.respondToWebhook",
  "typeVersion": 1,
  "position": [
    450,
    300
  ],
  "parameters": {
    "respondWith": "json",
    "responseBody": "={\n  \"success\": true,\n  \"timestamp\": \"{{ $now }}\",\n  \"data\": {{ $json }}\n}",
    "options": {
      "responseCode": 200
    }
  }
}
```

---

## 💡 Best Practices

1. **Always set a Response Code**: Be explicit about 200 vs 201 vs 400.
2. **Standardize Response Structure**: Always use `{ success: boolean, data?: any, error?: string }`.
3. **Handle Errors**: Don't let the workflow fail silently; catch errors and return a 500 response.
4. **Fast Response**: Ensure the workflow reaches this node quickly (under 30s) to avoid client timeouts.
