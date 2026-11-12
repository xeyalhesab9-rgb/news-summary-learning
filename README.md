# Offline News Summary — Learning Demo

This small project demonstrates how a Node.js program can copy a text summary into an output folder without using the internet.

## Files
- `main.ts` — program entry point (Node.js 22 can run this TypeScript-flavoured JavaScript file in supported configurations; use `node main.ts`).
- `summary.txt` — sample text. It is explicitly fictional practice text, not real news.

## Run
From this folder, with Node.js 22 installed:

```sh
node main.ts
```

The program creates `output/entry.txt` and copies the contents of `summary.txt` there.

To choose another output directory:

```sh
OUTPUT_DIR=out node main.ts
```

This is an educational example, not a competition submission. Do not present the sample text as factual news or invent sources.
