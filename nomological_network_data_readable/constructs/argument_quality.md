# Argument quality
**Type:** Construct  
**Referenced in:** 6 papers  
**Also known as:** Argumentative flow, Argument coherence  

## State of the Field

**Definition agreement:** Consensus. Most papers define argument quality as the overall strength of an argument, contribution, or response in terms of logical coherence, sound structure, persuasiveness, and often evidential support or clarity. A few definitions are tailored to a setting such as counterspeech or are phrased as a model's latent ability to produce such arguments, but they still target the same core property rather than a different phenomenon.

**Space of definitions.** Across the surveyed work, the prevailing usage treats it as a multidimensional property, often framed as a latent trait or ability, of arguments or discussion contributions: papers describe how cogent, reasonable, well-structured, logically coherent, rhetorically persuasive, and dialectically constructive the reasoning is. Within this broad framing, authors spell it out through coherence, relevance, and persuasiveness, or through logical, rhetorical, and dialectical dimensions. A smaller line narrows the concept to a model's ability to capture argumentative flow, namely the progression of claims, evidence, and rhetorical intent, and another setting-specific framing uses argument coherence for counterspeech that offers specific, logically consistent, evidence-based refutation.

**Space of facets.** Most papers decompose the construct rather than treat it as unitary. The broad framing is broken into fine-grained dimensions such as clarity, credibility, and logical sufficiency, into coherence, relevance, and persuasiveness, or into logical, rhetorical, and dialectical dimensions; some work explicitly assesses it through 15 fine-grained dimensions proposed by prior work. At the edge of this usage, some authors use nearby labels for narrower facets: argumentative flow centers on the logical progression of claims, evidence, and rhetorical intent, while argument coherence names a counterspeech dimension concerned with specific, logically consistent, evidence-based refutation.

**Space of measurement.** Papers link it to 1 measurement instrument, LLM-as-a-judge, and to no behavioral indicators. In that use, GPT-4 is prompted for a win-rate judgment that decides which of two arguments is superior or whether both are equally good. Some papers also describe more decomposed assessment, including 15 fine-grained dimensions, logical, rhetorical, and dialectical dimensions, or a counterspeech-specific argument-coherence dimension, but no additional instrument is explicitly linked.

## Sources

**[A Logical Fallacy-Informed Framework for Argument Generation](https://aclanthology.org/2025.naacl-long.374.pdf)**
> The latent trait reflecting how cogent, reasonable, and well-structured an argument is, encompassing multiple fine-grained dimensions such as clarity, credibility, and logical sufficiency.

**[Uncovering Argumentative Flow: A Question-Focus Discourse Structuring Framework](https://aclanthology.org/2025.emnlp-main.416.pdf) (as "Argumentative flow")**
> The latent ability of a model to capture and reproduce the logical progression of claims, evidence, and rhetorical intent in argumentative discourse, reflecting coherent and persuasive reasoning structure.

**[CSEval: Towards Automated, Multi-Dimensional, and Reference-Free Counterspeech Evaluation using Auto-Calibrated LLMs](https://aclanthology.org/2025.naacl-long.279.pdf) (as "Argument coherence")**
> The degree to which a counterspeech response presents specific, logically consistent, and evidence-based arguments that refute the hateful content.

## Relationships

### Argument quality →
- **LLM-as-a-judge** (measurements) — *measured_by*
  > For the win-rate, we prompt GPT-4 to decide which argument is superior, or if both are equally good. (Section 5.2)
  - [A Logical Fallacy-Informed Framework for Argument Generation](https://aclanthology.org/2025.naacl-long.374.pdf)
