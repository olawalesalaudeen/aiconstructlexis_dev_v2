# CommonGen
**Type:** Measurement  
**Referenced in:** 9 papers  

## State of the Field

**What it is.** Across definitions, CommonGen is most commonly described as a commonsense-guided or constrained text generation benchmark or dataset. Papers consistently define the task as generating a coherent or natural sentence from a given set of concepts or keywords, often three to five per example, with the sentence required to contain all of them; some frame this as describing an everyday scenario or as a struct-to-text task, and one definition notes that inflections of the keywords are allowed. A smaller usage modifies the data split by restricting the training set to samples having "man" while leaving validation and test unchanged.

**What it is claimed to measure.** Papers use CommonGen to measure 3 constructs and 3 behavioral indicators, so its reported measurement role is spread across several targets rather than centered on one. The linked constructs are Constraint satisfaction, Evaluation ability, and Generative ability, and the linked behavioral indicators are Commonsense generation, Constrained decoding, and Text generation. In these uses, papers describe CommonGen as a way to compare text generation and evaluation abilities, to evaluate commonsense generation and constrained decoding, and, in one study, to report soft and hard constraint satisfaction metrics on whether required concepts are included.

**Space of uses.** Papers commonly position CommonGen as an evaluation benchmark for keyword-constrained or commonsense generation. One study describes it as a commonly used dataset for keyword-constrained generation, another uses it to compare the text generation and evaluation abilities of LLMs, and another includes it alongside E2E NLG, Web NLG, and the Adidas product description dataset in a broader text generation benchmark suite. Papers do not link it to other measurement instruments.

## Sources

**[Language Model Self-improvement by Reinforcement Learning Contemplation](https://proceedings.iclr.cc/paper_files/paper/2024/file/d5a655b8b373737b4f2aea8f78e5e754-Paper-Conference.pdf)**
> A commonsense-guided text generation dataset that requires models to generate a sentence describing a scenario using a given set of concepts.

## Relationships

### → CommonGen
- **Generative ability** (constructs) — *measured_by*
  > We conduct experiments to compare the text generation and evaluation abilities of LLMs using the CommonGen (Lin et al., 2020) task, which involves generating a sentence that describes an everyday scenario based on a given set of common concepts (Section 4.1)
  - [Language Model Self-improvement by Reinforcement Learning Contemplation](https://proceedings.iclr.cc/paper_files/paper/2024/file/d5a655b8b373737b4f2aea8f78e5e754-Paper-Conference.pdf)
- **Evaluation ability** (constructs) — *measured_by*
  > We conduct experiments to compare the text generation and evaluation abilities of LLMs using the CommonGen (Lin et al., 2020) task... (Section 4.1)
  - [Language Model Self-improvement by Reinforcement Learning Contemplation](https://proceedings.iclr.cc/paper_files/paper/2024/file/d5a655b8b373737b4f2aea8f78e5e754-Paper-Conference.pdf)
- **Commonsense generation** (behaviors tasks) — *measured_by*
  > we first evaluate Ctrl-G on the Commonsene Generation (CommonGen) benchmark [18]. (Sec 4.1)
  - [Adaptable Logical Control for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d15c16cf5619a2b1606da5fc88e3f1a9-Paper-Conference.pdf)
- **Constraint satisfaction** (constructs) — *measured_by*
  > For CommonGen, we report two constraint satisfaction metrics - (1) % Soft Constraint Satisfaction: measures the overall percentage of constraints that are satisfied across all data points, (2) % Hard Constraint Satisfaction: measures the percentage of data points where all required concepts are included (Section 4.3).
  - [Constrained Decoding with Speculative Lookaheads](https://aclanthology.org/2025.naacl-long.239.pdf)
- **Constrained decoding** (behaviors tasks) — *measured_by*
  > We test keyword-constrained generation on the commonly used CommonGen (Lin et al., 2020) dataset.
  - [DeAL: Decoding-time Alignment for Large Language Models](https://aclanthology.org/2025.acl-long.1274.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > We evaluate Plugin on four text generation benchmarks: (a) E2E NLG (Duˇsek et al., 2020), (b) Web NLG (Gardent et al., 2017), (c) CommonGen (Lin et al., 2020), and (d) the Adidas product description dataset (adi, 2023). (Section 7)
  - [Logits are All We Need to Adapt Closed Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hiranandani25a/hiranandani25a.pdf)
