# WMDP
**Type:** Measurement  
**Referenced in:** 18 papers  

## State of the Field

**What it is.** Across the papers, WMDP is most commonly treated as a popular unlearning benchmark for hazardous or harmful knowledge. Definitions describe it as evaluating a model's capacity to generate and then unlearn such knowledge, especially in biosecurity and cybersecurity, and some descriptions also include chemical security. Papers do not describe it identically: some call it the World Model Development Project benchmark, others the Weapons of Mass Destruction Proxy benchmark, and one definition specifies a multiple-choice dataset with WMDP-bio and WMDP-cyber subsets.

**What it is claimed to measure.** In the recorded links, papers use WMDP to measure one behavioral indicator, multiple-choice question answering, and no constructs are linked to it. The explicit measurement links therefore converge on a single behavioral indicator rather than several constructs. Beyond that link, definitions frequently say it evaluates unlearning capability, or the unlearning of hazardous or harmful knowledge, in domains such as biosecurity, cybersecurity, and sometimes chemical security.

**Space of uses.** Papers position WMDP both as a popular unlearning benchmark and as one dataset within broader evaluation suites. It appears alongside MMLU, TOFU, the Harry Potter series dataset, HarmBench, and CyberSecEval2, and some authors present it as a representative benchmark for hazardous-domain unlearning. In uses that treat it as multiple-choice question answering, evaluation is framed around multiple-choice items, and one paper counts success by whether the model returns the correct A/B/C/D answer in the prescribed format.

## Sources

**[Unlearning or Obfuscating? Jogging the Memory of Unlearned LLMs via Benign Relearning](https://proceedings.iclr.cc/paper_files/paper/2025/file/18fd48d9cbbf9a20e434c9d3db6973c5-Paper-Conference.pdf)**
> The World Model Development Project (WMDP) benchmark, which is used to evaluate a model's capacity for generating, and subsequently unlearning, hazardous knowledge in domains like biosecurity and cybersecurity.

## Relationships

### → WMDP
- **Unlearning** (constructs) — *measured_by*
  > WMDP is employed to evaluate the effectiveness of unlearning approaches: a low accuracy on WMDP’s multiple-choice questions suggests that the underlying weaponization knowledge may have been successfully unlearned. (Section 4)
  - [On Evaluating the Durability of Safeguards for Open-Weight LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/9d3a4cdf6f70559e8c6fe02170fba568-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > We use the multiple-choice question-answering Weapons of Mass Destruction Proxy (WMDP) and Massive Multitask Language Understanding (MMLU) benchmarks. (Section 3.1. Benchmarks).
  - [The Elicitation Game: Evaluating Capability Elicitation Techniques](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hofstatter25a/hofstatter25a.pdf)
- **Unlearning efficacy** (constructs) — *measured_by*
  > Furthermore, we extend our exploration to the WMDP benchmark and are surprised to find that SatImp exhibits exceptional unlearning performance.
  - [Exploring Criteria of Loss Reweighting to Enhance LLM Unlearning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ak/yang25ak.pdf)
