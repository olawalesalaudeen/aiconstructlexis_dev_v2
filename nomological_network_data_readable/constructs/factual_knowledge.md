# Factual knowledge
**Type:** Construct  
**Referenced in:** 51 papers  
**Also known as:** Factual recall, Knowledge recall, Fact recall, Long-term knowledge recall, Factual knowledge recall, Factual knowledge retrieval, Parametric knowledge retrieval  

## State of the Field

**Definition agreement:** Consensus. Most papers define factual knowledge as a model's latent store of accurate, verifiable facts, usually world knowledge encoded in its parameters, together with the ability to retrieve or use those facts when prompted. A few papers narrow this to particular retrieval settings such as knowledge triples, edited or injected facts, or context-presented facts, but these are minor instantiations of the same core idea rather than a substantial alternative definition.

**Space of definitions.** Most papers describe factual knowledge as the model's ability, or the extent to which it has encoded, stored, and can retrieve accurate world facts from its parameters or pretraining when queried. Closely related labels such as fact recall, knowledge recall, factual knowledge recall, and long-term or parametric knowledge recall are usually used for the same basic idea, often with the added emphasis that the facts are stored internally and can be accessed independent of the current context. A smaller line of work narrows the construct to retrieving specific factual associations, subject-relation-object triples, or entities linked to a subject and relation, and a few papers define recall over edited or injected knowledge rather than over pretraining knowledge. Some authors also extend the construct from retrieval alone to using or expressing those facts in responses or reasoning.

**Space of facets.** Papers use several near-synonymous labels for this family of constructs, including fact recall, knowledge recall, factual knowledge recall, long-term knowledge recall, and parametric knowledge retrieval. The main axis of variation is scope: some definitions stress recall that is independent of current context, some focus on facts relevant to a given context during reasoning, and some focus on newly edited or injected facts; another structural framing represents knowledge as subject-relation-object triples or masked tail-entity completion. A few papers contrast factual knowledge with in-context learning or recent context retrieval, and some discuss it alongside perception ability or commonsense reasoning. One paper also notes that high-level facts are more accessible than low-level details.

**Space of measurement.** Operationalization is benchmark and dataset based: papers link factual knowledge to 9 measurement instruments, 1 behavioral indicator, and no linked constructs. MMLU is the most common instrument and is repeatedly used to assess factual or world knowledge; CounterFact and TriviaQA also recur, followed by ARC-Challenge and ARC-Easy, with several other instruments used as well. The measures are mainly QA or benchmark evaluations, and papers also use tail-entity completion, time-sensitive question answering, and model-editing datasets to test factual knowledge. This mostly matches definitions centered on retrieving stored facts when queried, while the editing datasets operationalize a narrower version in which facts are treated as editable triples or edited knowledge.

**Links.** Beyond measurement, one paper claims a causal relationship from instruction following to factual knowledge, reporting that the approach substantially improved the model's factual knowledge. No correlational or other related links are reported.

## Sources

**[SelectIT: Selective Instruction Tuning for LLMs via Uncertainty-Aware Self-Reflection](https://proceedings.neurips.cc/paper_files/paper/2024/file/b130a5691815f550977e331f8bec08ae-Paper-Conference.pdf)**
> The extent to which a model has encoded and can accurately retrieve factual information about the world.

**[Mechanistic Unlearning: Robust Knowledge Unlearning and Editing via Mechanistic Localization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guo25k/guo25k.pdf) (as "Factual recall")**
> The latent ability of a model to retrieve and express specific factual associations.

**[Bring Reason to Vision: Understanding Perception and Reasoning through Model Merging](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25cm/chen25cm.pdf) (as "Knowledge recall")**
> The model's ability to retrieve and use stored factual information or world knowledge to inform its responses in tasks like general visual question answering.

**[Position: Enough of Scaling LLMs! Lets Focus on Downscaling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/goel25c/goel25c.pdf) (as "Fact recall")**
> The ability of a model to store and retrieve factual information from its parameters.

**[Benchmark Profiling: Mechanistic Diagnosis of LLM Benchmarks](https://aclanthology.org/2025.emnlp-main.789.pdf) (as "Long-term knowledge recall")**
> The latent ability to access and retrieve stored factual knowledge about the world, such as historical, scientific, or geographical facts, independent of the current context.

**[Tracing and Dissecting How LLMs Recall Factual Knowledge for Real World Questions](https://aclanthology.org/2025.acl-long.1133.pdf) (as "Factual knowledge recall")**
> The latent ability of a model to access and utilize stored factual information relevant to a given context during reasoning.

**[Provable In-Context Vector Arithmetic via Retrieving Task Concepts](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bu25a/bu25a.pdf) (as "Factual knowledge retrieval")**
> The model's ability to access and retrieve stored factual information when prompted.

**[Massive Values in Self-Attention Modules are the Key to Contextual Knowledge Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jin25f/jin25f.pdf) (as "Parametric knowledge retrieval")**
> The latent ability of a model to retrieve factual knowledge that has been encoded during pre-training, independent of the current input context.

## Relationships

### Factual knowledge →
- **MMLU** (measurements) — *measured_by*
  > Factual knowledge: We use the Massive Multitask Language Understanding dataset (MMLU (Hendrycks et al., 2021)) to assess the factual knowledge of LLMs and report 5-shot results. (Section 4.1)
  - [SelectIT: Selective Instruction Tuning for LLMs via Uncertainty-Aware Self-Reflection](https://proceedings.neurips.cc/paper_files/paper/2024/file/b130a5691815f550977e331f8bec08ae-Paper-Conference.pdf)
- **CounterFact** (measurements) — *measured_by*
  > The CounterFact dataset is used to test the model’s factual knowledge of data from Wikipedia. (Section 5.1)
  - [The Truth is in There: Improving Reasoning in Language Models with Layer-Selective Rank Reduction](https://proceedings.iclr.cc/paper_files/paper/2024/file/4c2092ec0b1370cce3fb5965ab255fae-Paper-Conference.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > For factual knowledge, we use PopQA (Mallen et al., 2023), TriviaQA (Joshi et al., 2017), and Natural Questions (NQ) (Kwiatkowski et al., 2019). (Section 5)
  - [LLM Braces: Straightening Out LLM Predictions with Relevant Sub-Updates](https://aclanthology.org/2025.acl-long.393.pdf)
- **Natural Questions** (measurements) — *measured_by*
  > For factual knowledge, we use PopQA (Mallen et al., 2023), TriviaQA (Joshi et al., 2017), and Natural Questions (NQ) (Kwiatkowski et al., 2019). (Section 5)
  - [LLM Braces: Straightening Out LLM Predictions with Relevant Sub-Updates](https://aclanthology.org/2025.acl-long.393.pdf)
- **TimeQA** (measurements) — *measured_by*
  > We consider TimeQA (Chen et al., 2021) since it contains complex queries that require challenging time-sensitive knowledge. (Section 3.1)
  - [Take a Step Back: Evoking Reasoning via Abstraction in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/592da1445a51e54a3987958b5831948f-Paper-Conference.pdf)
- **ZsRE** (measurements) — *measured_by*
  > For factual knowledge, two popular model editing datasets Zero-Shot Relation Extraction (ZSRE) (Levy et al., 2017) and COUNTERFACT (Meng et al., 2022) were adopted in our experiments. (Section 5.2)
  - [Perturbation-Restrained Sequential Model Editing](https://proceedings.iclr.cc/paper_files/paper/2025/file/2c15b0221da28bc6f4373a7e78b896dd-Paper-Conference.pdf)
- **PopQA** (measurements) — *measured_by*
  > For factual knowledge, we use PopQA (Mallen et al., 2023), TriviaQA (Joshi et al., 2017), and Natural Questions (NQ) (Kwiatkowski et al., 2019). (Section 5)
  - [LLM Braces: Straightening Out LLM Predictions with Relevant Sub-Updates](https://aclanthology.org/2025.acl-long.393.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > "Knowledge-Focused Tasks include ARC-Challenge and ARC-Easy (Clark et al., 2018), PIQA (Bisk et al., 2019), Winogrande (Sakaguchi et al., 2019), OpenBookQA (Mihaylov et al., 2018), and HellaSwag (Zellers et al., 2019). These benchmarks primarily assess factual knowledge"
  - [Understanding the Skill Gap in Recurrent Language Models: The Role of the Gather-and-Aggregate Mechanism](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bick25a/bick25a.pdf)
- **ARC-Easy** (measurements) — *measured_by*
  > "Knowledge-Focused Tasks include ARC-Challenge and ARC-Easy (Clark et al., 2018), PIQA (Bisk et al., 2019), Winogrande (Sakaguchi et al., 2019), OpenBookQA (Mihaylov et al., 2018), and HellaSwag (Zellers et al., 2019). These benchmarks primarily assess factual knowledge"
  - [Understanding the Skill Gap in Recurrent Language Models: The Role of the Gather-and-Aggregate Mechanism](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bick25a/bick25a.pdf)

### Associated with
- **WikiText** (measurements)
  > The world fact loss uses encyclopedic data (e.g., WikiText (Merity et al., 2017)) to maintain general factual knowledge. (Section 1).
  - [OBLIVIATE: Robust and Practical Machine Unlearning for Large Language Models](https://aclanthology.org/2025.emnlp-main.183.pdf)
