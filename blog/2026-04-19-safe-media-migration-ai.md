---
slug: safe-media-migration-ai
title: "Reclaiming 50GB+ Mac Storage Safely: A Journey from 'Disk Full' to AI-Powered Deduping"
authors: [arpit]
tags: [productivity, macos, ai, python, storage]
---

We've all been there: the dreaded **"Your disk is almost full"** notification on macOS. This week, I hit the wall. A 52GB folder of mobile backups, photos, and videos was choking my internal SSD. 

But as an engineer, the thought of manually dragging-and-dropping thousands of files—or worse, manually deleting duplicates—felt like a recipe for disaster. One wrong click and a decade of memories could be gone.

Here is how I solved it using a "Safety-First" framework and a custom Python deduplication engine.

<!-- truncate -->

## The Problem: Data Hoarding & The NTFS Wall

I had a massive archive of media to move to my reliable **Seagate Backup Plus**. But I faced three major hurdles:

1.  **The Risk of Loss**: Drag-and-drop in Finder is "silent." If it fails halfway, you don't know what's copied and what's not.
2.  **The NTFS Wall**: My Seagate drive was formatted in NTFS (Windows standard), making it **Read-Only** on my Mac. I couldn't write a single byte to it.
3.  **The Duplicate Nightmare**: Over years of backups, I had hundreds of duplicate files with different names (e.g., `IMG_123.jpg` vs `IMG_123_copy.jpg`).

## Attempt 1: The Manual Way (and why I didn't do it)
Manual deletion is the enemy of accuracy. I considered online "Duplicate Finder" tools, but I didn't want to grant a random app access to my entire photo library, nor did I want to pay $20 for a one-time cleanup.

## The Solution: AI-Guided "Safety-First" Migration

I decided to pair-program the solution with my AI coding agent. We broke the process into 100% safe checkpoints.

### Phase 1: Overcoming the NTFS Barrier
Before moving data, I had to fix the "Read-Only" status. Guided by the AI, I installed a professional NTFS driver (Paragon). After a quick reboot and some permission juggling, my Seagate was finally writable.

### Phase 2: The "Immutable" Copy (Rsync)
Instead of a simple copy, we used `rsync`. 
```bash
rsync -avh --progress --ignore-existing "[Source]" "[Destination]"
```
**Why?** Because `rsync` is resumable. If my Mac crashed during the 52GB transfer, I could just run it again, and it would pick up exactly where it left off, skipping everything already safe on the drive.

### Phase 3: The "Fingerprinting" Logic (The 'Magic' Part)
Once the data was safely on the Seagate, I wanted to remove duplicates. This is where the AI suggested something far superior to filename checking: **SHA-256 Hashing.**

#### The Logic Behind the Scenes:
1.  **Size Grouping**: The script first groups files by their size. If two files are different sizes, they *cannot* be the same.
2.  **Cryptographic Fingerprinting**: For files with the same size, the script generates a unique SHA-256 "Hash" (a digital fingerprint).
3.  **O(1) Lookup**: Using a Python dictionary (Hashmap), we can check if we've seen that exact fingerprint before in constant time.

If the fingerprints match, the data is 100% identical byte-for-byte, regardless of the filename.

## The Results
*   **Space Saved**: **52GB** instantly reclaimed on my Mac.
*   **Accuracy**: 100%. We verified the file counts and total bytes using `find` and `du`.
*   **Time Invested**: About 10 minutes of setup for a process that would have taken hours of manual sorting.
*   **Cost**: $0 ($20 saved on premium deduplication apps).

## Conclusion
This journey reminded me that coding isn't just for building products; it's a productivity superpower for our daily lives. By automating the "boring" and "risky" parts of file management with AI, I moved from a panicked "Disk Full" state to a perfectly organized, deduplicated archive in a single afternoon.

**Safe moving, safe coding!**
