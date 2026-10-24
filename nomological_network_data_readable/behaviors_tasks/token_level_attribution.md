# Token-level attribution
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Per-label attribution, Word-level attribution, Highlight explanation extraction, Input saliency, Prompt influence, Word-level explanation generation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is an explanation behavior that assigns token- or word-level importance to the input for a model output. Most definitions describe highlighting or scoring the specific input tokens, words, spans, or token pairs that contribute to a prediction, and one study describes these highlights as "faithful cues reflecting the model's reasoning logic toward answer prediction." Some authors make the attribution label-specific and signed, so tokens have positive or negative impact on a particular class, while one paper frames the same behavior as prompt-token influence on the generation of a target output token rather than an alternative.

**Variants.** Variants appear as per-label attribution, word-level attribution or explanation generation, highlight explanation extraction, input saliency, and prompt influence. The settings differ: papers study words in a tip for relevance or triage predictions, highlight tokens, token pairs, or spans for answer prediction, prompt tokens' effect on each generated token in an output sequence, and explanation signals for intent classification that mark main predicates and their arguments.

**Space of elicitation and scores.** No measurement instrument is linked to this behavior in the papers. Operationalizations are described through the explanation output itself, including per-label signed scores, highlighted words or spans, extracted highlight token sets, and token-level assessments of how prompt tokens affect generated tokens.

**What it is taken as evidence of.** No construct is linked to this behavior in the papers, and no relationship claims specify which construct it is taken to indicate.

## Sources

**[NormXLogit: The Head-on-Top Never Lies](https://aclanthology.org/2025.emnlp-main.1769.pdf) (as "Per-label attribution")**
> Generating token-level attributions specific to each output label, indicating which input tokens positively or negatively influence a particular class prediction.

**[Not Your Typical Government Tipline: LLM-Assisted Routing of Environmental Protection Agency Citizen Tips](https://aclanthology.org/2025.emnlp-main.1788.pdf) (as "Word-level attribution")**
> The observable output of highlighting specific words in a tip that contribute to the model’s classification decision, used for interpretability analysis.

**[Graph-Guided Textual Explanation Generation Framework](https://aclanthology.org/2025.emnlp-main.1494.pdf) (as "Highlight explanation extraction")**
> Identifying input tokens, token pairs, or spans that are most important for a model's prediction, based on attention weights or other attribution methods.

**[Unveiling and Manipulating Prompt Influence in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/77c6ccacfd9962e2307fc64680fc5ace-Paper-Conference.pdf) (as "Input saliency")**
> The latent influence of individual input tokens in a prompt on the generation of specific output tokens by an LLM, reflecting their causal contribution to model decisions.

**[Unveiling and Manipulating Prompt Influence in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/77c6ccacfd9962e2307fc64680fc5ace-Paper-Conference.pdf) (as "Prompt influence")**
> The latent extent to which prompt tokens shape or steer the model's generated outputs.

**[Main Predicate and Their Arguments as Explanation Signals For Intent Classification](https://aclanthology.org/2025.naacl-long.539.pdf) (as "Word-level explanation generation")**
> The model produces a subset of input tokens identified as most relevant to its prediction, forming an explanation signal that highlights action and domain.
