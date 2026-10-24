# HumanEval-X
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** HumanEval-Multi  

## State of the Field

**What it is.** Across the surveyed papers, the prevailing usage treats HumanEval-X as a multilingual benchmark for evaluating code generation capabilities. Some definitions make this more specific by calling it a comprehensive benchmark across Python, C++, Java, JavaScript, and Go, while another describes it as a multilingual extension of HumanEval that translates its Python problems into multiple languages. A smaller line of work uses the name HumanEval-Multi for the multilingual version of HumanEval and frames it as a test dataset for utility and for the functional correctness of model-generated code.

**What it is claimed to measure.** Papers link HumanEval-X to one construct and two behavioral indicators. It is most commonly used to measure Code generation: papers report pass@1 on HumanEval-X and describe it as evaluating multilingual code generation abilities. More narrowly, one paper reports it as measuring Code translation, and one paper links the HumanEval-X (CPP and Java) dataset to measuring Factuality through reported code efficiency and pass@1.

**Space of uses.** Papers position HumanEval-X mainly as an evaluation benchmark or test dataset, often by reporting pass@1 results on it for multilingual code generation. No paper links it to another measurement instrument, though papers sometimes use it alongside other code benchmarks: one study adopts it as one of several code benchmarks, and another discusses it alongside MBXP as a multilingual extension of HumanEval. One paper also uses the multilingual version as the test dataset for utility.

## Sources

**[MxMoE: Mixed-precision Quantization for MoE with Accuracy and Performance Co-Design](https://raw.githubusercontent.com/mlresearch/v267/main/assets/duanmu25a/duanmu25a.pdf)**
> A multilingual benchmark for evaluating the code generation capabilities of large language models.

**[ProSec: Fortifying Code LLMs with Proactive Security Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25aa/xu25aa.pdf) (as "HumanEval-Multi")**
> A multilingual benchmark for evaluating the functional correctness of model-generated code, used in this paper to assess model utility.

## Relationships

### → HumanEval-X
- **Code generation** (behaviors tasks) — *measured_by*
  > We compare the pass@1 accuracy of the base models and the corresponding fine-tuned AlchemistCoder models on Humaneval-X [49]. (Section 3.2, under heading 'Results on multilingual code generation.')
  - [AlchemistCoder: Harmonizing and Eliciting Code Capability by Hindsight Tuning on Multi-source Data](https://proceedings.neurips.cc/paper_files/paper/2024/file/040c816286b3844fd78f2124eec75f2e-Paper-Conference.pdf)
- **Code translation** (behaviors tasks) — *measured_by*
  > underperforms for Java-to-C++ translation on the HumanEval-X benchmark (48.8% versus 82.3%).
  - [PAK-UCB Contextual Bandit: An Online Learning Approach to Prompt-Aware Selection of Generative Models and LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25m/hu25m.pdf)
