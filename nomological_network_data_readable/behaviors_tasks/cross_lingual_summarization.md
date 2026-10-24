# Cross-lingual summarization
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is summarization where the output summary is in a different language from the input document. Definitions consistently frame the behavior as producing a target-language summary from source text in another language, and one survey states that "the language of the output summary is different from the language of the input document," describing the task as requiring multilingual understanding and translation capabilities. A narrower formulation treats it as generating a low-resource Indic-language summary from English with few-shot demonstrations, while another extends it to multilingual source articles that are translated into a target language for summarization, with emphasis on preserving event and entity information across linguistic boundaries.

**Variants.** The main variants are low-resource Indic settings and multilingual news settings. One line uses the name "Cross-Lingual Summarization (CrossSum-In)" for English-to-Indic summarization, including work on summarizing an English text into four low-resource languages. Another studies event-centric multilingual news clustering and MCMS, including CLUST-MCMS, where source articles in multiple languages feed a target-language summary. Papers also use the broader label "cross-lingual" for any dataset where the input and summary languages differ.

**Space of elicitation and scores.** No measurement instrument is linked to it, and the papers do not identify a recurring instrument for eliciting or scoring this behavior.

**What it is taken as evidence of.** No construct is linked to it, so these papers do not explicitly present cross-lingual summarization as evidence of another construct.

## Sources

**[The State and Fate of Summarization Datasets: A Survey](https://aclanthology.org/2025.naacl-long.372.pdf)**
> Generating a summary in a low-resource Indic language based on an input text in English, using few-shot demonstrations.
