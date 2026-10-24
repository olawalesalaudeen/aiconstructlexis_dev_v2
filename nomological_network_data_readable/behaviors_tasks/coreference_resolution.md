# Coreference resolution
**Type:** Behavior  
**Referenced in:** 48 papers  
**Also known as:** Pronoun resolution, Co-reference resolution, Pronoun reference resolution, Reference resolution, Anaphora resolution, Argument alignment, Pronoun disambiguation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats this as resolving references in context, most often by identifying the antecedent of a pronoun, or more generally by linking noun phrases and pronouns that refer to the same real-world entity. A recurrent formulation uses Winograd-style sentences, frequently with gendered pronouns and occupations or professions, and one paper states that "the task is to identify the coreference link between the pronouns and the correct professional" (Debiasing Algorithm through Model Adaptation). Some papers narrow success to choosing the correct referent in a 2-choice pronoun task, while others describe the broader goal of identifying all expressions in a text that co-refer, and several definitions also say the task requires context or commonsense understanding.

**Variants.** Besides the dominant Winograd-style framing, papers use nearby names such as pronoun resolution, co-reference resolution, reference resolution, anaphora resolution, and pronoun disambiguation. Most of these still concern pronouns in text, but smaller strands study spoken utterances and dialogue, where surrounding sentences or prior mentions disambiguate personal pronouns, translation settings where pronoun choice depends on an antecedent in context, and multi-document event extraction, where argument alignment is based on semantic compatibility and coreference cues.

**Space of elicitation and scores.** Papers link this behavior to 10 measurement instruments. Measurement is most commonly benchmark-based, especially through WinoGrande, followed by WinoBias and WSC, and papers describe these as pronoun or coreference resolution tasks, with WinoBias focusing on associating gendered pronouns with occupations. Additional linked instruments include Flores-101 and MT-Bench, showing that some authors elicit the behavior in translation and multi-turn settings, alongside several other instruments.

**What it is taken as evidence of.** Papers connect this behavior to 3 constructs, with mixed relationship types rather than a single recurring framing. One line claims a causal relationship from coreference resolution to Long-context understanding, using language about bridging context gaps, while another relates coreference resolution to Stereotyping, noting that gender biases can be made visible in it. A separate paper reports that Ambiguity detection ability is related to coreference resolution, describing a persistent tension between correct disambiguation and detecting ambiguity.

## Sources

**[Are Bert Family Good Instruction Followers?  A Study on Their Potential And Limitations](https://proceedings.iclr.cc/paper_files/paper/2024/file/0a13eb0c08247364066e8d86551c3090-Paper-Conference.pdf)**
> The observable behavior of linking gendered pronouns to their correct antecedent profession in Winograd-style sentences, particularly in stereotypical versus anti-stereotypical contexts.

**[metabench - A Sparse Benchmark of Reasoning and Knowledge in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ebc26584810a189ef1e4f173aba4319-Paper-Conference.pdf) (as "Pronoun resolution")**
> The observable task of correctly identifying the antecedent of a pronoun in a sentence, which requires contextual understanding.

**[Is Your Model Fairly Certain? Uncertainty-Aware Fairness Evaluation for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25cp/wang25cp.pdf) (as "Co-reference resolution")**
> The task of determining which noun phrases or entities in a text refer to the same real-world entity, specifically resolving a pronoun to an occupation.

**[COAS2W: A Chinese Older-Adults Spoken-to-Written Transformation Corpus with Context Awareness](https://aclanthology.org/2025.emnlp-main.903.pdf) (as "Pronoun reference resolution")**
> Correctly identifying and resolving ambiguous personal pronouns in spoken utterances by leveraging contextual cues from surrounding sentences.

**[From Language to Cognition: How LLMs Outgrow the Human Language Network](https://aclanthology.org/2025.emnlp-main.1237.pdf) (as "Reference resolution")**
> Identifying the correct referent of pronouns or noun phrases within a text.

**[Sheaf Discovery with Joint Computation Graph Pruning and Flexible Granularity](https://aclanthology.org/2025.emnlp-main.446.pdf) (as "Anaphora resolution")**
> The general task of determining the referent of an anaphoric expression, such as a pronoun.

**[Multi-Document Event Extraction Using Large and Small Language Models](https://aclanthology.org/2025.emnlp-main.972.pdf) (as "Argument alignment")**
> The observable process of matching arguments from different documents to the same underlying referent by evaluating semantic compatibility and coreference cues.

**[IG-Pruning: Input-Guided Block Pruning for Large Language Models](https://aclanthology.org/2025.emnlp-main.537.pdf) (as "Pronoun disambiguation")**
> The task of correctly identifying the antecedent of a pronoun in a sentence, often requiring commonsense understanding.

## Relationships

### Coreference resolution →
- **WinoGrande** (measurements) — *measured_by*
  > WinoGrande (Sakaguchi et al., 2019) for conference resolution (Section 4.1).
  - [Merge, Then Compress: Demystify Efficient SMoE with Hints from Its Routing Policy](https://proceedings.iclr.cc/paper_files/paper/2024/file/3d09a88c3372cdb79401fde592ca4db8-Paper-Conference.pdf)
- **WinoBias** (measurements) — *measured_by*
  > WinoBias Zhao et al. (2018) present the dataset containing a WinoGrad scheme (Levesque et al., 2011) examples. ... The task is to identify the coreference link between the pronouns and the correct professional. (Section 2.3)
  - [Debiasing Algorithm through Model Adaptation](https://proceedings.iclr.cc/paper_files/paper/2024/file/05aedcaf4bc6e78a5e22b4cf9114c5e8-Paper-Conference.pdf)
- **WSC** (measurements) — *measured_by*
  > “the Winograd Schema Challenge evaluates coreference resolution capabilities (WSC; Levesque et al., 2012)”
  - [BERTs are Generative In-Context Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/04ea184dfb5f1babb78c093e850a83f9-Paper-Conference.pdf)
- **Text summarization** (behaviors tasks) — *causes*
  > When addressing tasks involving long-dependency issues, such as summarization... coreference resolution methods demonstrate a clear advantage over other approaches... (Section 5.1)
  - [Bridging Context Gaps: Leveraging Coreference Resolution for Long Contextual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/a1b71d48d4806ecbe5a9e19fa3f10fdc-Paper-Conference.pdf)
- **bAbI** (measurements) — *measured_by*
  > The tasks in bAbI vary in the number of facts, question complexity, and the reasoning skills they assess, including spatial and temporal reasoning, deduction, and coreference resolution.
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Question answering** (behaviors tasks) — *causes*
  > highlighting the effectiveness of leveraging coreference resolution to bridge context gaps in question answering. (Abstract)
  - [Bridging Context Gaps: Leveraging Coreference Resolution for Long Contextual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/a1b71d48d4806ecbe5a9e19fa3f10fdc-Paper-Conference.pdf)
- **SuperGLUE** (measurements) — *measured_by*
  > The SuperGLUE benchmark comprises advanced language understanding tasks... coreference resolution (WSC; ())... (Section 4.1)
  - [SSMLoRA: Enhancing Low-Rank Adaptation with State Space Model](https://aclanthology.org/2025.naacl-long.230.pdf)
- **OntoNotes** (measurements) — *measured_by*
  > Evaluation is conducted on five datasets: WikiHop (multi-hop QA), TriviaQA (open QA), OntoNotes (coreference resolution), Hyperpartisan News Detection (long document classification), and HotpotQA (distractor setting, joint F1).
  - [DrDiff: Dynamic Routing Diffusion with Hierarchical Attention for Breaking the Efficiency-Quality Trade-off](https://aclanthology.org/2025.emnlp-main.474.pdf)
- **Relation extraction** (behaviors tasks) — *causes*
  > Ablation studies demonstrate that integrating coreference and decomposition increases recall on rare relations by over 20%. (Abstract)
  - [Automated Knowledge Graph Construction using Large Language Models and Sentence Complexity Modelling](https://aclanthology.org/2025.emnlp-main.783.pdf)
- **XWinograd** (measurements) — *measured_by*
  > XWinograd (Tikhonov and Ryabinin, 2021): a cross-lingual adaptation of the Winograd Schema challenge5 for coreference resolution evaluation. (Section 4.1)
  - [Multilingual Language Model Pretraining using Machine-translated Data](https://aclanthology.org/2025.emnlp-main.1426.pdf)

### → Coreference resolution
- **Ambiguity detection ability** (constructs) — *correlates*
  > Across all prompts we observe a persistent tension: high performance in Correct-Unamb tends to be accompanied by lower performance in Detect-Ambig, and vice versa. (Section 6)
  - [Correct-Detect: Balancing Performance and Ambiguity Through the Lens of Coreference Resolution in LLMs](https://aclanthology.org/2025.emnlp-main.1527.pdf)

### Associated with
- **Textual reasoning** (behaviors tasks)
  > Natural language reasoning suite consists of 11 benchmarks that involve natural language based reasoning such as Question Answering, natural language inference (NLI), sentence completion, co-reference resolution, and general intelligence.
  - [To Code or Not To Code? Exploring Impact of Code in Pre-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/c513d1786f85531fac7050947736265f-Paper-Conference.pdf)
- **TACT** (measurements)
  > Through TACT, the model is implicitly required to address information extraction (IE) challenges such as coreference resolution... (Section 1)
  - [TACT: Advancing Complex Aggregative Reasoning with Information Extraction Tools](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d7025dc9bd4c8b6fb1eef80cc618008-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Long-context understanding** (constructs)
  > Our method demonstrates the advantages and capabilities of information extraction and coreference resolution in understanding long contexts
  - [Bridging Context Gaps: Leveraging Coreference Resolution for Long Contextual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/a1b71d48d4806ecbe5a9e19fa3f10fdc-Paper-Conference.pdf)
- **Gender bias** (constructs)
  > As noted by Davis and van Schijndel (2020), gender biases in neural models can be made visible in coreference resolution. (Section 4)
  - [Correct-Detect: Balancing Performance and Ambiguity Through the Lens of Coreference Resolution in LLMs](https://aclanthology.org/2025.emnlp-main.1527.pdf)
