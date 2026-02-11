# Workflow Validation Template

**Workflow Name**: [WORKFLOW_NAME]
**Date**: [DATE]
**Status**: ⏳ In Progress | ✅ Ready | ❌ Needs Work

---

## Trigger Configuration

- [ ] **Trigger Type**: [Webhook | Manual | Schedule | Event-based | Other]
- [ ] **Trigger Status**: Active and accessible
- [ ] **Webhook URL** (if applicable): `[URL]`

---

## Data Format

### Input Schema
- [ ] **Format**: JSON
- [ ] **Schema Documented**: Yes | No

```json
{
  "field1": "string",
  "field2": "number",
  "field3": "boolean"
}
```

### Output Schema
- [ ] **Format**: JSON
- [ ] **Schema Documented**: Yes | No

**Success Response**:
```json
{
  "success": true,
  "data": {
    // Response data
  },
  "message": "Operation completed successfully",
  "timestamp": "2026-02-09T00:00:00Z"
}
```

**Error Response**:
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {}
  },
  "timestamp": "2026-02-09T00:00:00Z"
}
```

---

## Workflow Configuration

- [ ] **Error Handling**: Proper error nodes included
- [ ] **Timeout Settings**: [X] seconds (appropriate for operation)
- [ ] **Authentication**: [None | API Key | OAuth | Other]
- [ ] **Rate Limiting**: [Not needed | Configured]

---

## Testing

- [ ] **Test Data Prepared**: Yes | No
- [ ] **Test Execution**: Passed | Failed | Not tested
- [ ] **Edge Cases Considered**: Yes | No

**Test Results**:
```
[Paste test results here]
```

---

## API Specification

### Endpoint
- **URL**: `[n8n webhook URL]`
- **Method**: `POST` | `GET` | `PUT` | `DELETE`
- **Content-Type**: `application/json`

### Request Example
```bash
curl -X POST "https://your-n8n-instance.com/webhook/..." \
  -H "Content-Type: application/json" \
  -d '{
    "field1": "value1",
    "field2": 123
  }'
```

### Response Example
```json
{
  "success": true,
  "data": {
    "result": "example"
  },
  "message": "Success",
  "timestamp": "2026-02-09T00:00:00Z"
}
```

---

## Notes

[Any additional notes, gotchas, or special considerations]

---

## Next Steps

- [ ] Export workflow to `workflow.json`
- [ ] Create API specification document
- [ ] Begin front-end development
