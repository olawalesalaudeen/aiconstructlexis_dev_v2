# Generality
**Type:** Construct  
**Referenced in:** 10 papers  
**Also known as:** Paraphrase execution, Cross-lingual propagation  

## State of the Field

**Definition agreement:** Consensus. Most papers define generality as whether an edit transfers beyond the exact edit prompt to semantically equivalent queries, especially paraphrases. One paper states this in a cross-lingual setting, but it is still the same core property of an edit producing the correct updated answer for equivalent prompts rather than a different phenomenon.

**Space of definitions.** Across the papers, the prevailing usage treats generality as post-edit generalization: a model should apply newly edited knowledge to rephrased or semantically equivalent prompts, not only the exact edit prompt. A closely matching wording calls this paraphrase execution, meaning the model produces the correct edited output for a paraphrased version of the original prompt. A smaller line of work extends the same idea across languages, defining it as cross-lingual propagation, the extent to which an edit in one language transfers to semantically equivalent queries in other languages.

**Space of facets.** Papers most often place generality among the criteria used to evaluate editing, alongside locality and either reliability or efficacy. Some authors use paraphrase execution as an alternative name for the within-language form of the construct, while others use cross-lingual propagation for a multilingual extension of the same broad concern. Beyond these renamings and extensions, papers do not link it to other constructs.

**Space of measurement.** Papers link generality to 3 measurement instruments and 3 behavioral indicators. The most common operationalizations are evaluation on CounterFact, ZsRE, and MzsRE: papers report success rates on CounterFact, accuracy on ZsRE, and multilingual evaluation on translated MzsRE items, with one vision-language paper using visual question answering as the evaluation task. These measurements largely follow the dominant definitions by checking whether an edit holds beyond the original prompt, and one line explicitly extends this to cross-lingual transfer.

**Links.** Beyond measurement, papers report related rather than causal or correlational links. One paper describes generality as related to knowledge editing, stating that knowledge editing should satisfy generality because there are different ways to express the same request. Another paper relates catastrophic forgetting to generality by noting that, as models acquire specialized knowledge from fine-tuning, they may forget their general capabilities.

## Sources

**[GeoEdit: Geometric Knowledge Editing for Large Language Models](https://aclanthology.org/2025.emnlp-main.676.pdf)**
> The ability of a model to apply newly edited knowledge to rephrased or semantically equivalent prompts, not just the exact one used for editing.

**[Resolving Lexical Bias in Model Editing](https://raw.githubusercontent.com/mlresearch/v267/main/assets/rizwan25a/rizwan25a.pdf) (as "Paraphrase execution")**
> Generating the correct edited output when presented with a paraphrased version of the original edit prompt.

**[Editing Across Languages: A Survey of Multilingual Knowledge Editing](https://aclanthology.org/2025.emnlp-main.803.pdf) (as "Cross-lingual propagation")**
> The extent to which a factual edit made in one source language successfully transfers to semantically equivalent queries in other target languages.

## Relationships

### Generality →
- **CounterFact** (measurements) — *measured_by*
  > In the Counterfact dataset, we evaluate the models on Efficacy, Generality, and Locality, using success rates as metrics. (Section 5.1)
  - [CoME: An Unlearning-based Approach to Conflict-free Model Editing](https://aclanthology.org/2025.naacl-long.325.pdf)
- **ZsRE** (measurements) — *measured_by*
  > Since ZsRE does not measure generative capabilities, we evaluate the models based only on accuracy in terms of Efficacy, Generality, and Locality. (Section 5.1)
  - [CoME: An Unlearning-based Approach to Conflict-free Model Editing](https://aclanthology.org/2025.naacl-long.325.pdf)

### → Generality
- **Instruction following ability** (constructs) — *causes*
  > For reliability, generalization, and portability evaluations, LLaVA-1.5 outperforms BLIP-2 and MiniGPT-4. This improved performance can be attributed to its larger model size and better instruction-following capability... (Section 5.2.1)
  - [MMKE-Bench: A Multimodal Editing Benchmark for Diverse Visual Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/01fb6de3360f9e32862665580e2c5853-Paper-Conference.pdf)

### Associated with
- **Knowledge editing** (behaviors tasks)
  > Knowledge editing seeks to maximize the chance of an LLM responding with y given x, while satisfying the following additional criteria at the same time...: (1) Generality: there are different ways to express US president, wherefore the edited model should generalize. (Section 2.1)
  - [Unlocking Efficient, Scalable, and Continual Knowledge Editing with Basis-Level Representation Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f89a23a19d1617e7fb16d4f7a049ce2-Paper-Conference.pdf)
- **Editing locality** (constructs)
  > we find that it seems to be an impossible triangle—reliability, generalization, and locality can not be realized at the same time in the continual editing settings. (Section 1)
  - [WISE: Rethinking the Knowledge Memory for Lifelong Model Editing of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/60960ad78868fce5c165295fbd895060-Paper-Conference.pdf)
