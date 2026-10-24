# Selection bias
**Type:** Construct  
**Referenced in:** 10 papers  

## State of the Field

**Definition agreement:** Consensus. All papers define selection bias as a model's tendency in multiple-choice settings to prefer particular answer identifiers or positions independent of the actual content. One paper adds that this may arise from positional or surface-level cues and notes effects on fairness or robustness, but these are the same core phenomenon rather than a different construct.

**Space of definitions.** Across the definitions, the prevailing usage treats selection bias as a latent or inherent tendency for a model to favor certain option identifiers or answer positions regardless of content. Most papers describe it as content-insensitive preference in multiple-choice settings, often exemplified as repeatedly choosing a particular label or relying on answer position rather than understanding. A narrower phrasing emphasizes positional or other surface-level patterns and frames the behavior as a deviation from fair option selection, while another emphasizes that this preference can compromise evaluation robustness, but these definitions still point to the same underlying option preference.

**Space of facets.** Papers mainly break the construct into preferences over option identifiers, answer positions, token identity, and positional preferences. It is used most often in multiple-choice question answering, where predefined choices make such preferences visible. Positional bias is the closest neighboring construct: one paper claims a causal relationship from positional bias to selection bias, while another treats them as related and says selection bias is driven by both token identity and positional preferences.

**Space of measurement.** No measurement instrument is linked to it. Papers instead operationalize it through one linked behavioral indicator, multiple-choice question answering, by observing whether models favor specific option IDs or answer positions when selecting among predefined choices. The recurring signals are preference for a particular label and reliance on answer position regardless of content, which closely matches the dominant definition.

**Links.** The most recurrent linked constructs are positional bias and robustness. One paper claims a causal relationship from selection bias to robustness, stating that poor robustness to option position changes results from models preferring specific option IDs, while another reports that robustness correlates with selection bias because models weak on selection bias also tend to change outputs across prompt templates. Separate papers claim a causal relationship from positional bias to selection bias, describe multiple-choice question answering as related to selection bias because predefined options introduce preferences for certain positions or tokens, and claim a causal relationship from selection bias to reasoning, stating that the bias compromises fairness, reliability, and true reasoning capabilities.

## Sources

**[PertEval: Unveiling Real Knowledge Capacity of LLMs with Knowledge-Invariant Perturbations](https://proceedings.neurips.cc/paper_files/paper/2024/file/149578235c90954e4f10e40fa181918f-Paper-Datasets_and_Benchmarks_Track.pdf)**
> A latent tendency of a model to favor certain option identifiers (e.g., always picking 'A') regardless of content.

## Relationships

### Selection bias →
- **Robustness** (constructs) — *causes*
  > LLMs’ poor robustness to option position changes results from their biased behavior: they prefer to select speciﬁc option IDs as answers (like “Option A”), which we term as selection bias.
  - [Large Language Models Are Not Robust Multiple Choice Selectors](https://proceedings.iclr.cc/paper_files/paper/2024/file/54dd9e0cff6d9214e20d97eb2a3bae49-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > Such bias compromises fairness, reliability, and the true reasoning capabilities of these models. (Section 1).
  - [Addressing Blind Guessing: Calibration of Selection Bias in Multiple-Choice Question Answering by Video Language Models](https://aclanthology.org/2025.acl-long.162.pdf)

### → Selection bias
- **Prompt sensitivity** (constructs) — *correlates*
  > This suggests that a model weak on selection bias also tends to change its output for different prompt templates. (Section 7.1)
  - [Revisiting LLM Value Probing Strategies: Are They Robust and Expressive?](https://aclanthology.org/2025.emnlp-main.7.pdf)

### Associated with
- **Positional bias** (constructs)
  > Our findings show that selection bias, driven by both token identity and positional preferences, intensifies with increasing task difficulty, particularly when MCQ options are fine-grained. (Conclusion)
  - [Benchmarking and Mitigating MCQA Selection Bias of Large Vision-Language Models](https://aclanthology.org/2025.emnlp-main.1703.pdf)
- **Multiple-choice question answering** (behaviors tasks)
  > One such underexplored phenomenon is selection bias in MCQA. Unlike open-ended VQA formats, MCQA requires models to select one option among predefined choices (e.g., A/B/C/D), introducing the possibility of preference for certain option positions or tokens. (Introduction)
  - [Benchmarking and Mitigating MCQA Selection Bias of Large Vision-Language Models](https://aclanthology.org/2025.emnlp-main.1703.pdf)
