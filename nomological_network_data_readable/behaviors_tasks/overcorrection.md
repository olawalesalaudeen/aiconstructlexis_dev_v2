# Overcorrection
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Over-correction  

## State of the Field

**Space of definitions.** Across the available definitions, overcorrection is treated as an observable failure mode during correction, where the model makes unnecessary changes to input text that was already correct. The shared framing is altering correct parts of the input or otherwise making "excessive modifications to input text," and one paper extends this to adding redundant content. Papers also describe the behavior as introducing new errors, often with low precision and possible distortion of the original meaning.

**Variants.** The behavior is studied in more than one correction setting. In CoVoGER: A Multilingual Multitask Benchmark for Speech-to-text Generative Error Correction with Large Language Models, it appears in speech-to-text generative error correction, where the paper hypothesizes that ASR's "stricter correctness constraints" make outputs more vulnerable to over-correction than ST. In Leveraging What's Overfixed: Post-Correction via LLM Grammatical Error Overcorrection, it is framed in grammatical error correction and post-correction, including redundant additions, and the paper also states that overcorrection can be intentionally triggered to "maximize the possible correction via LLM."

**Space of elicitation and scores.** No paper links it to a measurement instrument, so the available papers do not specify a recurring instrument for eliciting or scoring it.

**What it is taken as evidence of.** No paper links it to a construct as evidence of, so the available papers do not indicate a shared construct that overcorrection is taken to reflect.

## Sources

**[CoVoGER: A Multilingual Multitask Benchmark for Speech-to-text Generative Error Correction with Large Language Models](https://aclanthology.org/2025.emnlp-main.320.pdf) (as "Over-correction")**
> An observable failure mode where the model introduces errors by altering correct parts of the input hypothesis, particularly under strict correctness constraints in ASR.

**[Leveraging What's Overfixed: Post-Correction via LLM Grammatical Error Overcorrection](https://aclanthology.org/2025.emnlp-main.1431.pdf)**
> The observable behavior of making excessive, unnecessary changes to input text during correction, including altering correct parts or adding redundant content.
