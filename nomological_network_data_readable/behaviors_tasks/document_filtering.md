# Document filtering
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Sentence selection  

## State of the Field

**Space of definitions.** Across the available definitions, papers treat this behavior as selecting from retrieved material what should be kept for answering a question. One paper frames it at the document or content level, choosing retrieved materials most suitable for the answer, while another frames it at the sentence level, keeping only sentences relevant to the question and filtering out irrelevant context parts.

**Variants.** The main variation in the papers is granularity. One paper discusses filtering whole documents or broader retrieved content, while another operationalizes it as sentence selection within a retrieved passage, using binary masks over context parts and keeping an entire sentence only when its score is above 0.5.

**Space of elicitation and scores.** No measurement instrument is linked to it in the papers.

**What it is taken as evidence of.** No construct is linked to it in the papers, so the available work does not specify a broader construct that this behavior is taken to reflect.

## Sources

**[C-3PO: Compact Plug-and-Play Proxy Optimization to Achieve Human-like Retrieval-Augmented Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25an/chen25an.pdf)**
> The process of selecting relevant documents or content from a set of retrieved materials that are most suitable for answering a question.

**[Provence: efficient and robust context pruning for retrieval-augmented generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e956fef0946dc1e39760f94b78045fe-Paper-Conference.pdf) (as "Sentence selection")**
> Choosing which sentences from a retrieved passage should be kept for answering a question.
