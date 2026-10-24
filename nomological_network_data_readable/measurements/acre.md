# ACRE
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Most commonly, papers describe ACRE as the Abstract Causal REasoning dataset, a diagnostic benchmark for causal induction. Definitions recurrently present it as identifying which Blicket objects trigger a machine or detector, and one paper says it evaluates how well vision systems perform causal induction. A smaller line of work frames it as a rule-induction benchmark in which the model infers a hidden mapping from input-output examples and generates new examples consistent with the shared rule.

**What it is claimed to measure.** Papers link ACRE to 3 constructs and 1 behavioral indicator. They use it to measure inductive reasoning, causal reasoning, and visual reasoning, and they also report it as measuring causal inference, described in one paper as testing an LLM's ability to identify causal relationships. Across these claims, its measurement role is spread across several reasoning targets rather than converging on one alone.

**Space of uses.** No measurement instrument is linked to it. In use, papers place it alongside CATER, Something-Else, and STAR for diverse visual reasoning tasks, and alongside List Functions as an inductive reasoning benchmark. They also position it as a diagnostic benchmark, and one paper says it is used to 'directly verify' an analysis in a setting where agents update their knowledge via ICL.

## Sources

**[Look, Remember and Reason: Grounded Reasoning in Videos with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1df282080150537df7b00c20aadcafad-Paper-Conference.pdf)**
> The Abstract Causal REasoning dataset, a diagnostic benchmark designed to evaluate a model's ability to perform causal induction by identifying which "Blicket" objects trigger a machine.

## Relationships

### → ACRE
- **Inductive reasoning** (constructs) — *measured_by*
  > We directly verify our analysis above using an inductive reasoning task called Abstract Causal REasoning (Chi Zhang et al. 2021, ACRE), where all LLM agents update their knowledge via ICL. (Section 5)
  - [Bias Amplification in Language Model Evolution: An Iterated Learning Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/4418f6a54f4314202688d77956e731ce-Paper-Conference.pdf)
- **Visual reasoning** (constructs) — *measured_by*
  > We demonstrate the effectiveness of our framework on diverse visual reasoning tasks from the ACRE, CATER, Something-Else and STAR datasets (Abstract).
  - [Look, Remember and Reason: Grounded Reasoning in Videos with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1df282080150537df7b00c20aadcafad-Paper-Conference.pdf)
- **Causal reasoning** (constructs) — *measured_by*
  > The ACRE dataset (Zhang et al., 2021) evaluates how well vision systems perform causal induction (Section 4.1).
  - [Look, Remember and Reason: Grounded Reasoning in Videos with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1df282080150537df7b00c20aadcafad-Paper-Conference.pdf)
- **Causal inference** (behaviors tasks) — *measured_by*
  > “ACRE. The Abstract Causal REasoning (ACRE) dataset ... tests an LLM’s ability to identify causal relationships.”
  - [LLMs Can Plan Only If We Tell Them](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1e67cde895c3c91edb43569ad0df260-Paper-Conference.pdf)
