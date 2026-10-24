# Text editing
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Text correction, Sentiment extrapolation, Legal document proofreading  

## State of the Field

**Space of definitions.** Across the papers, the dominant framing is broad text modification: a model either generates insertion or continuation suggestions that must respect contextual and logical constraints, or rewrites an existing passage to correct or improve it. Success is described in task-specific terms, including fixing misspellings and restoring intended content, matching clearly defined correction answers, identifying and correcting errors in a legal text, or editing a response by correcting factual inconsistency, removing hallucinations, and improving style, coherence, and fluency. A smaller line of work treats the behavior as changing review text so that its sentiment moves beyond a given rating range.

**Variants.** Variants span story writing, proofreading, and controlled rewriting. Papers study insertion and continuation in stories under combinations of logical constraints, text correction for noisy surgical narrations and smartphone-style correction tasks, grammatical error correction framed as explicit insert, delete, and replace operations, legal document proofreading, editing of machine-generated text by human experts or LLMs, and review rewriting that shifts 2 to 4 star text toward 1 or 5 star sentiment.

**Space of elicitation and scores.** No measurement instrument is linked to it. In the papers, the behavior is elicited directly through task setups such as correction items with clearly defined answers, prompts for text insertions or continuations under logical constraints, proofreading requests over legal text, and editing prompts that ask for factual correction and improvements to style, coherence, and fluency.

**What it is taken as evidence of.** No construct is linked to it. As a result, the papers do not record a shared claim about which broader construct this behavior indicates.

## Sources

**[Procedure-Aware Surgical Video-language Pretraining with Hierarchical Knowledge Augmentation](https://proceedings.neurips.cc/paper_files/paper/2024/file/de0f2a9943b7bd060e5c10c2fb2654f3-Paper-Conference.pdf) (as "Text correction")**
> Rewriting noisy surgical narration text to fix misspellings and restore intended content.

**[Adaptable Logical Control for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d15c16cf5619a2b1606da5fc88e3f1a9-Paper-Conference.pdf)**
> Generating continuation or insertion suggestions for a story or document while respecting contextual and logical constraints.

**[Learning Extrapolative Sequence Transformations from Markov Chains](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hager25a/hager25a.pdf) (as "Sentiment extrapolation")**
> The task of modifying text reviews with sentiment ratings within a given range (e.g., 2-4 stars) to have ratings outside that range (e.g., 1 or 5 stars).

**[LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Legal document proofreading")**
> Identifying and correcting errors within a given legal text.
