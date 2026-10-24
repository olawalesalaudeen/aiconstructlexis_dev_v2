# Preference over-rejection
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Over-rejection  

## State of the Field

**Space of definitions.** Across the papers, the behavior is generally referred to simply as over-rejection, but the concrete task differs by setting. The most explicit definition treats it as a failure mode in preference learning for translation, where the translation's writing style is "forced away from the preferred data distribution," which one study says can "severely impair" the generation of meaningful translations. Some safety-focused work uses the same term for incorrect rejection of prompts, describing security alignment as able to "lead to the incorrect rejection of security prompts."

**Variants.** The recorded uses span at least two settings. In translation work, over-rejection is about style drift in generated translations; in safety-oriented work, it is probed through prompt rejection, and one paper evaluates it with a benign question dataset. One linked paper also studies the behavior in large audio language models rather than the translation setting.

**Space of elicitation and scores.** Papers link over-rejection to one measurement instrument, AIAH. It is used as a benchmark, and its benign question dataset is used to evaluate over-rejection. No other instrument is linked by the papers.

**What it is taken as evidence of.** Papers link over-rejection to three constructs, but not as a single agreed indicator of one construct. One paper claims a causal relationship from Safety to over-rejection, another claims a causal relationship from over-rejection to Helpfulness, phrased as increased over-rejection resulting in diminished helpfulness, and another reports that over-rejection is related to Safety alignment. The linked constructs are Helpfulness, Safety, and Safety alignment.

## Sources

**[X-ALMA: Plug & Play Modules and Adaptive Rejection for Quality Translation at Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/ec0c9ca85b4ea49c7ebfb503cf55f2ae-Paper-Conference.pdf) (as "Over-rejection")**
> An observable failure mode in preference learning for translation where the model's output style shifts significantly away from the preferred data distribution.
