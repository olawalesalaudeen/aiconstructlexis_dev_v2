# Image watermark removal
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Watermark removal  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats this behavior as an image editing task in which a model removes a watermark from an image, often in response to a textual instruction. Definitions differ slightly between a "visible watermark" and "embedded watermarks," but they agree that success means the watermark is gone and the image's original appearance is restored; one description adds that it should do so "without introducing artifacts" (PromptFix: You Prompt and We Fix the Photo).

**Variants.** Papers mainly present it as a single low-level image editing task rather than a family of named sub-tasks. The observed variation is mostly in wording and setup: some descriptions emphasize instruction-guided removal, while others describe the removal or elimination of embedded watermarks from images.

**Space of elicitation and scores.** No measurement instrument is linked to it by the papers.

**What it is taken as evidence of.** No construct is linked to it by the papers.

## Sources

**[PromptFix: You Prompt and We Fix the Photo](https://proceedings.neurips.cc/paper_files/paper/2024/file/468c9ec4215e05b6488ac307d377662e-Paper-Conference.pdf) (as "Watermark removal")**
> The task of removing a visible watermark from an image, guided by a textual instruction.
