# FIX #1: PowerShell Execution Policy (1 minute)

## What We're Doing
Changing PowerShell security policy to allow npm scripts to run.

---

## Step-by-Step Instructions

### Step 1: Open PowerShell as Administrator

**Method 1: From Start Menu**
1. Press the **Windows Key**
2. Type: `powershell`
3. **DON'T PRESS ENTER YET!**
4. You'll see "Windows PowerShell" in the results
5. **Right-click** on it
6. Click **"Run as administrator"**
7. Windows asks "Do you want to allow this app to make changes?"
8. Click **"Yes"**
9. A new PowerShell window opens with "Administrator" in the title

**Method 2: From Windows Terminal (if you have it)**
1. Press **Windows Key** + **X**
2. Click **"Windows PowerShell (Admin)"** or **"Terminal (Admin)"**
3. Click **"Yes"** when prompted

**How to know it worked:**
- The window title says "Administrator: Windows PowerShell"
- OR the window title starts with "Administrator:"

---

### Step 2: Run the Fix Command

**Copy this command exactly:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**In the admin PowerShell:**
1. **Right-click** in the window (this pastes)
2. OR type the command manually (be exact!)
3. Press **Enter**

**You'll see this message:**
```
Execution Policy Change
The execution policy helps protect you from scripts that you do not trust...
Do you want to change the execution policy?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"):
```

4. Type **`Y`** (uppercase or lowercase, doesn't matter)
5. Press **Enter**

**Success looks like:**
- The command prompt returns (PS C:\...>)
- No error messages
- Just returns to prompt

---

### Step 3: Verify the Fix

**Still in the same admin PowerShell, run:**
```powershell
Get-ExecutionPolicy
```

**Expected output:**
```
RemoteSigned
```

If you see "RemoteSigned", **SUCCESS** ✅

---

### Step 4: Keep This Window Open

**Don't close the admin PowerShell yet!** We'll use it for the next fix.

---

## What Did This Do?

**Before:**
- Execution Policy = Restricted
- npm.ps1 scripts blocked
- npm commands fail

**After:**
- Execution Policy = RemoteSigned
- Scripts you create or download can run
- npm will work (once we fix PATH)

**Security Note:**
- "RemoteSigned" is safe
- Allows local scripts (like npm)
- Requires downloaded scripts to be signed by trusted publisher
- This is the recommended setting for developers

---

## If Something Went Wrong

### "Access Denied" or "Unauthorized"
- PowerShell is not running as administrator
- Close it and try Step 1 again
- Make sure to right-click → "Run as administrator"

### "Set-ExecutionPolicy is not recognized"
- You're in the wrong type of shell
- Make sure it's PowerShell, not Command Prompt
- Command Prompt has "C:\>" prompt
- PowerShell has "PS C:\>" prompt

### Can't find PowerShell in start menu
- Try searching for "Windows PowerShell" (full name)
- Or use Windows Key + X method

---

## Ready for Next Fix?

Once you've completed this and see "RemoteSigned", tell me:

**"Execution policy fixed"**

Then we'll move to Fix #2 (adding Node.js to PATH).
