# Antigravity Skills & Resources Guide

This guide catalogs the new resources available for extending Antigravity's capabilities with n8n and frontend skills.

---

## 🚀 1. Agent System Instructions (`AGENTS.md`)
**Status**: ✅ Created in Project Root

I have created `AGENTS.md` containing the "Enhanced System Instructions" recommended by the n8n-MCP documentation. This tells Antigravity exactly how to:
- Behave silently during long operations
- Use parallel execution for speed
- Validate everything before building
- Never trust default values

**Impact**: This will make specific n8n tasks much faster and more reliable.

---

## 🎨 2. Frontend Design Skill
**Status**: ℹ️ Knowledge Acquired

The `frontend-design` skill from Anthropic provides a philosophy for creating "Bold Interfaces" that avoid generic AI aesthetics.

**Key Principles:**
- **Bold Direction**: Commit to an extreme (Minimalist, Brutalist, Magazine, etc.)
- **Typography**: Verify font choices; avoid Inter/Roboto default.
- **Motion**: Use staggered animations for page loads.
- **No "AI Slop"**: Avoid purple gradients, standard rounded cards, and cookie-cutter layouts.

**Usage**: When we build the Next.js app in the `apps/` folder, I will apply these principles to ensure it looks premium.

---

## 📚 3. Antigravity Skills Vault
**Status**: ℹ️ Resource Identified

The `antigravity-skills` repository contains 300+ specialized skills.

**Relevant Categories for Us:**
- **Workflows & Architecture**: Patterns for robust automation.
- **Data & AI**: Advanced data transformation skills.
- **Development**: Next.js and React best practices.

**Action**: If we hit complex challenges, I can search this vault for specific skills to import.

---

## 🔗 4. n8n Documentation Updates
**Status**: ℹ️ Verified

The official n8n documentation confirms our setup for MCP server access including:
- **Authentication**: We are using the correct `mcp_config.json` structure.
- **Tool Usage**: The list of tools we verified (19 tools) matches the official documentation.

---

## 💡 Summary
We are fully up-to-date with the latest best practices. The creation of `AGENTS.md` is the most significant improvement, as it tunes the agent specifically for high-performance n8n work.
