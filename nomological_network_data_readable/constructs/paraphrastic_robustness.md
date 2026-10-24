# Paraphrastic robustness
**Type:** Construct  
**Referenced in:** 4 papers  
**Also known as:** Robustness to paraphrases  

## State of the Field

**Definition agreement:** Consensus. All three papers define paraphrastic robustness as a model property where performance or behavior stays stable under semantically equivalent rephrasings of a prompt or instruction. The differences are only in wording and examples, with one paper adding cases like indirect references, but they are still studying the same phenomenon.

**Space of definitions.** Across the definitions, the prevailing usage treats paraphrastic robustness as stability under semantically unchanged rewording: a model should keep its performance stable, or produce the same correct behavior, when prompts or instructions are paraphrased. Most formulations make the unchanged meaning or intention explicit, and one definition broadens the relevant variation beyond rephrasing to include indirect object references. One wording focuses on rephrased questions or prompts, while the embodied-task papers state it as producing the same optimal behavior under instruction variations, but the core idea is the same.

**Space of facets.** One paper explicitly places it under generalization, describing it as a specific form of generalization tested through semantically equivalent instruction changes. Within that framing, papers vary mainly in scope: some use the label for paraphrases alone, while another description includes a broader class of linguistic variations such as indirect object references.

**Space of measurement.** Papers link it to one measurement instrument, CounterFact, and to one behavioral indicator, Language understanding task performance. In The Truth is in There: Improving Reasoning in Language Models with Layer-Selective Rank Reduction, robustness to paraphrases is operationalized as the percentage of datapoints for which a model gets all paraphrases of a question correct. The embodied-task papers operationalize it as whether an agent produces the same behavior under a linguistic variation of an instruction, and one paper mentions unseen instruction datasets measuring paraphrastic robustness and behavior generalization. These measurements directly test stability across semantically equivalent phrasings.

**Links.** One paper claims a causal relationship from Language understanding task performance to paraphrastic robustness, stating that the latter is expected given LLMs' language understanding capabilities (Large Language Models as Generalizable Policies for Embodied Tasks). No correlate or undirected related link is reported.

## Sources

**[The Truth is in There: Improving Reasoning in Language Models with Layer-Selective Rank Reduction](https://proceedings.iclr.cc/paper_files/paper/2024/file/4c2092ec0b1370cce3fb5965ab255fae-Paper-Conference.pdf) (as "Robustness to paraphrases")**
> The stability of a model's performance when a question or prompt is rephrased without changing its semantic meaning.

**[Large Language Models as Generalizable Policies for Embodied Tasks](https://proceedings.iclr.cc/paper_files/paper/2024/file/8f9461d11e8ce9b0b28b21bfc645d74e-Paper-Conference.pdf)**
> The latent ability of a model to produce consistent, correct behavior despite linguistic variations in task instructions, such as rephrasing or indirect object references, when the underlying intention remains unchanged.

## Relationships

### → Paraphrastic robustness
- **Natural language understanding** (constructs) — *causes*
  > Althought this is expected for paraphrastic robustnes as LLMs are known for their language understanding capabilities, it is somewhat surprising to see that the LLM helps even for novel behaviors...
  - [Large Language Models as Generalizable Policies for Embodied Tasks](https://proceedings.iclr.cc/paper_files/paper/2024/file/8f9461d11e8ce9b0b28b21bfc645d74e-Paper-Conference.pdf)
