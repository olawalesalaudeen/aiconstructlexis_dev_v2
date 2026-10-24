# The Pile
**Type:** Measurement  
**Referenced in:** 44 papers  
**Also known as:** Pile  

## State of the Field

**What it is.** Across the surveyed work, the prevailing framing is of a large, diverse language modeling corpus used for pre-training, though some papers instead emphasize it as validation or test data, or as a source for sampled analysis sets. Definitions variously describe an 800GB or 825 GB English text corpus, sometimes open-source, with train, validation, and test splits; some papers highlight 22 subsets or subdomains, while others select 16 non-copyrighted subsets or domain slices such as Pubmed Central, Stackexchange, Wikipedia, arXiv, and GitHub. A few papers further specify variants such as a deduplicated version or held-out subsets distinct from the training set.

**What it is claimed to measure.** Papers link it to 5 constructs and 1 behavioral indicator, and these uses are spread across several targets rather than centering on a single recurring claim. It is used to measure general ability, with one paper describing "losses on the Pile" as the reference, and it is also reported as measuring long-context understanding, memorization, and specialization; the behavioral-indicator link is to pre-training data detection, where one paper includes Pile among common benchmark datasets. The linked construct set also includes social bias, but there the recorded claim is different: one paper claims a causal relationship from The Pile to social bias, saying that demographic biases embedded in pre-training corpora like The Pile influence LLM outputs.

**Space of uses.** Usage is broad rather than uniform. Many papers use it directly for pre-training, next-token prediction, perplexity, recall, reconstruction, or downstream evaluation, sometimes as the standard Pile language modeling setting or as a validation split, while others sample from it for quantization calibration, random context analysis, token-frequency estimation, co-occurrence extraction, or specialist-domain training. It is directly linked to 2 other instruments, Books3 and Pile-CC, through papers that treat them as subsets or mixture components from The Pile.

**Concerns raised.** Concerns are limited but present. One survey notes that a method trained and tested on The Pile may overlap with the training corpus of the LLM. Separately, one paper claims that demographic biases embedded in pre-training corpora like The Pile influence LLM outputs, framing bias as a concern tied to this corpus.

## Sources

**[In-context Autoencoder for Context Compression in a Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2024/file/0b276510ec2d3f6613a8b60c41ff0438-Paper-Conference.pdf)**
> The Pile is a large text corpus used here as a pre-training dataset for language modeling comparisons.

**[Zoology: Measuring and Improving  Recall in Efficient Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/448fc91f669c15d10364ee01d512cc10-Paper-Conference.pdf) (as "Pile")**
> The Pile language modeling dataset used here as a validation and test corpus for measuring next-token prediction and recall-related slices.

## Relationships

### → The Pile
- **Language modeling** (behaviors tasks) — *measured_by*
  > For perplexity, we evaluate the models using the testing set of WikiText2 (Merity et al., 2016) and a randomly sampled subset from validation set of Pile dataset (Gao et al., 2021). (Section 5.1)
  - [Quamba: A Post-Training Quantization Recipe for Selective State Space Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb4b2fb2434f7cce5cb5ab50271296ee-Paper-Conference.pdf)
- **Language model pre-training** (behaviors tasks) — *measured_by*
  > For LLM pertaining, we report the perplexity on Wikitext 103 (Merity et al., 2016), C4 (Raffel et al., 2020), and Pile (Gao et al., 2020) (Section 6.1)
  - [COAT: Compressing Optimizer states and Activations for Memory-Efficient FP8 Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ac807c9b296964409b277369e55621a-Paper-Conference.pdf)
- **Long-context understanding** (constructs) — *measured_by*
  > Long-context understanding on Pile. (Figure 1)
  - [MambaExtend: A Training-Free Approach to Improve Long Context Extension of Mamba](https://proceedings.iclr.cc/paper_files/paper/2025/file/f1922bd718528ac3eab114eabbbfa7a0-Paper-Conference.pdf)
- **Pre-training data detection** (behaviors tasks) — *measured_by*
  > To verify the effectiveness of detection methods, we employ four common benchmark datasets for evaluations, including WikiMIA (Shi et al., 2024), ArXivTection (Duarte et al., 2024), BookTection (Duarte et al., 2024) BookMIA (Shi et al., 2024) and Pile (Maini et al., 2024). (Section 4.1)
  - [Fine-tuning can Help Detect Pretraining Data from Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/98cda3e39e4ca2da449092a99c485e1a-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > maintain the general-purpose ability (losses on the Pile) unchanged.
  - [Data Mixing Laws: Optimizing Data Mixtures by Predicting Language Modeling Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc84bfabe6389d8883fc2071c848f62a-Paper-Conference.pdf)
- **Specialization** (constructs) — *measured_by*
  > We consider 16 datasets from the PILE (Gao et al., 2020) as target specialization sets (Section 3)
  - [Soup-of-Experts: Pretraining Specialist Models via Parameters Averaging](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ablin25a/ablin25a.pdf)

### Associated with
- **Pile-CC** (measurements)
  > We train 70M and 160M language models on the mixture of Github and Pile-CC subset from the Pile dataset (Section 3.1).
  - [Data Mixing Laws: Optimizing Data Mixtures by Predicting Language Modeling Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc84bfabe6389d8883fc2071c848f62a-Paper-Conference.pdf)
- **Books3** (measurements)
  > We train on the mixtures of GitHub, Pile-CC, and Books3 subset from the Pile for a total of 30B tokens (Section 3.2).
  - [Data Mixing Laws: Optimizing Data Mixtures by Predicting Language Modeling Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc84bfabe6389d8883fc2071c848f62a-Paper-Conference.pdf)
- **Pythia** (measurements)
  > we have full access to both the Pythia model checkpoints from training and the Pile dataset they were trained on (Gao et al., 2020), which is required for our analysis. (Section 2.2)
  - [Compute-Optimal LLMs Provably Generalize Better with Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/4a13396b4c8a90e01dac61d2b0559ef7-Paper-Conference.pdf)
