# APIBench
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** API-Bench  

## State of the Field

A benchmark focused on APIs that load machine learning models, used to train and evaluate LLMs' ability to interface with ML services.

## Sources

**[Tool Unlearning for Tool-Augmented LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25a/cheng25a.pdf) (as "API-Bench")**
> A benchmark focused on APIs that load machine learning models, used to train and evaluate LLMs' ability to interface with ML services.

**[Reducing Tool Hallucination via Reliability Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25ap/xu25ap.pdf)**
> An out-of-domain test set used to evaluate a model's generalization ability on tool-use tasks with APIs it was not explicitly trained on.

## Relationships

### → APIBench
- **Generalization** (constructs) — *measured_by*
  > We further extend ToolLLaMA to an OOD dataset APIBench to validate its generalization ability.
  - [ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs](https://proceedings.iclr.cc/paper_files/paper/2024/file/28e50ee5b72e90b50e7196fde8ea260e-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *measured_by*
  > We also evaluate APIBench in Halluation Rate. (Section 4.1)
  - [Tool-Planner: Task Planning with Clusters across Multiple Tools](https://proceedings.iclr.cc/paper_files/paper/2025/file/7f605d59a0dbde101518b552cb616ddf-Paper-Conference.pdf)
- **Tool use** (behaviors tasks) — *measured_by*
  > “We evaluate PORTS on six popular tool-augmented datasets: ToolBench (Qin et al., 2024), API-Bank (Li et al., 2023), APIBench (Peng et al., 2023), BFCL-v2 (Yan et al., 2024), ToolE (Huang et al., 2024), Octopus-v2 (Chen and Li, 2024).”
  - [PORTS: Preference-Optimized Retrievers for Tool Selection with Large Language Models](https://aclanthology.org/2025.emnlp-main.507.pdf)
