# ETHICS
**Type:** Measurement  
**Referenced in:** 11 papers  
**Also known as:** ETHICS dataset, Ethics, Hendrycks Ethics  

## State of the Field

**What it is.** Across papers, the prevailing usage is as a benchmark dataset for machine ethics or ethical reasoning built around scenario-based moral judgments. Definitions commonly describe morally charged or common-sense scenarios; one paper says they are first-person descriptions of morally relevant actions with binary labels, and another uses the benchmark to categorize scenarios as "wrong" or "not wrong." Some papers refer specifically to Commonsense, Justice, or Deontology subsets, while a smaller framing presents it as a zero-shot benchmark scored by accuracy.

**What it is claimed to measure.** Papers use ETHICS to measure 3 constructs and 2 behavioral indicators, with the dominant use centered on moral reasoning. Several papers claim it measures moral reasoning, describing it as analyzing machine ethics, evaluating commonsense moral recognition, or "mainly measures LLM's moral reasoning ability," while a smaller line of work uses it to measure ethical decision-making. Single papers also use it to measure zero-shot task performance and binary classification, and one paper reports ETHICS as related to helpfulness.

**Space of uses.** No measurement instrument is linked to it. Papers usually position ETHICS as one component of broader evaluation suites, including morality comparisons with Social Chemistry 101 or STEER Rationality and safety-and-helpfulness groupings with TruthfulQA and ToxiGen; other uses focus only on the Commonsense or Justice subsets, or treat it as a zero-shot accuracy task among several language benchmarks.

**Concerns raised.** One paper notes that the common-sense moral scenarios were collected from English-speaking participants in the United States, Canada, and Great Britain, so the dataset "dominantly reflects a Western ethical perspective."

## Sources

**[EAI: Emotional Decision-Making of LLMs in Strategic Games and Ethical Dilemmas](https://proceedings.neurips.cc/paper_files/paper/2024/file/611e84703eac7cc03f78339df8aae2ed-Paper-Conference.pdf) (as "ETHICS dataset")**
> A benchmark dataset consisting of morally charged scenarios used to evaluate a model's ability to perform implicit ethical assessments.

**[CBQ: Cross-Block Quantization for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/15212bd2265c4a3ab0dbc1b1982c1b69-Paper-Conference.pdf) (as "Ethics")**
> A zero-shot benchmark dataset used to assess model accuracy on ethical reasoning tasks.

**[More RLHF, More Trust? On The Impact of Preference Alignment On Trustworthiness](https://proceedings.iclr.cc/paper_files/paper/2025/file/732c5757aa5577de9b103332cf7ac0bf-Paper-Conference.pdf)**
> A benchmark for evaluating machine ethics, including a 'Commonsense' subset with scenario-based moral recognition tasks.

**[Instruction Tuning With Loss Over Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/7ffb43adf37b3eeaba559098bc084cc6-Paper-Conference.pdf) (as "Hendrycks Ethics")**
> Dataset assessing ethical judgment on whether described actions are wrong.

## Relationships

### → ETHICS
- **Moral reasoning** (constructs) — *measured_by*
  > To verify ALI-Agent’s effectiveness as a general evaluation framework, we conduct experiments on six datasets from three distinct aspects of human values: ...morality (ETHICS [3], Social Chemistry 101 [37])...
  - [ALI-Agent: Assessing LLMs'  Alignment with Human Values via Agent-based Evaluation](https://proceedings.neurips.cc/paper_files/paper/2024/file/b35c38f70065ac6c694089ca93a015bb-Paper-Conference.pdf)
- **Ethical decision-making** (constructs) — *measured_by*
  > "Implicit Ethics: Using the ETHICS dataset [63], we use LLM to categorize morally charged scenarios as “wrong” or “not wrong”."
  - [EAI: Emotional Decision-Making of LLMs in Strategic Games and Ethical Dilemmas](https://proceedings.neurips.cc/paper_files/paper/2024/file/611e84703eac7cc03f78339df8aae2ed-Paper-Conference.pdf)
- **Zero-shot task performance** (behaviors tasks) — *measured_by*
  > The other is reported by the accuracy metric of zero-shot language tasks (Gao et al. (2021)) on PIQA (Bisk et al. (2020a)), HellaSwag (Clark et al. (2018)), ARC (Clark et al. (2018)), Mutual (Cui et al. (2020)) and Ehics (Hendrycks et al. (2020a)). (Section 5.1)
  - [CBQ: Cross-Block Quantization for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/15212bd2265c4a3ab0dbc1b1982c1b69-Paper-Conference.pdf)
- **Binary classification** (behaviors tasks) — *measured_by*
  > We use the “Justice” and “Commonsense” datasets from ETHICS (Hendrycks et al., 2020), which involve binary classification based on basic moral concepts. (Section 5.3)
  - [Representations Shape Weak-to-Strong Generalization: Theoretical Insights and Empirical Predictions](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xue25d/xue25d.pdf)
