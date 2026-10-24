# Reward model
**Type:** Measurement  
**Referenced in:** 11 papers  
**Also known as:** Process reward model  

## State of the Field

Across the provided literature, a reward model is most commonly defined as a learned scoring procedure used to assess how well a response aligns with a query, often for the purpose of filtering or ranking candidate responses. Its primary function is to compute a score that, as one paper states, "reflects how well the response Y aligns with given query X" ("Beyond Imitation: Leveraging Fine-grained Quality Signals for Alignment"). The provided papers use this instrument to measure constructs such as `Human preference alignment`, `Faithfulness`, and `Proactivity`. The development of these models is frequently based on human preferences, and is shown to be related to both `LLM-as-a-judge` and `Human evaluation` methodologies. Specific implementations mentioned in the data include the "Open-Assistant model (DeBERTa-v3)", "RM-Gemma-2B", and "RM-Mistral-7B". A less common framing appears in one paper, which introduces a "process reward model (PRM)" designed to evaluate the quality of intermediate reasoning steps, or "thoughts," rather than only the final output. Other documented applications include its use as a "model-based reference-less metric" and for evaluating the solvability of sub-tasks in planning frameworks.

## Sources

**[Achieving Human Parity in Content-Grounded Datasets Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf)**
> A learned scoring procedure used to assess how well a response aligns with a query and to filter or rank candidate responses.

**[Accelerating Large Language Model Reasoning via Speculative Search](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25di/wang25di.pdf) (as "Process reward model")**
> A model that assigns a reward score to each reasoning thought, used to evaluate the quality of intermediate reasoning steps in tree-search-based reasoning frameworks.

## Relationships

### → Reward model
- **Faithfulness** (constructs) — *measured_by*
  > "For each such aspect, we implement a scoring function and filter low-scoring pairs."
  - [Achieving Human Parity in Content-Grounded Datasets Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf)
- **Proactivity** (constructs) — *measured_by*
  > The labeled data is used to train a reward model that simulates human judgment and serves as an automatic evaluator of the proactiveness of LLM agents. (ABSTRACT)
  - [Proactive Agent: Shifting LLM Agents from Reactive Responses to Active Assistance](https://proceedings.iclr.cc/paper_files/paper/2025/file/75c37811e830bf029584b1c6fac17726-Paper-Conference.pdf)
- **Human preference alignment** (constructs) — *measured_by*
  > The evaluation metric is the reward model (OpenAssistant, 2023) trained on human feedback, measuring the the quality of summaries and alignment with human preference.
  - [NICE Data Selection for Instruction Tuning in LLMs with Non-differentiable Evaluation Metric](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25bm/wang25bm.pdf)
- **Reasoning quality** (constructs) — *measured_by*
  > “For example, a process reward model (PRM) can be employed to assign a reward score to each thought, offering an accurate evaluation of its quality.”
  - [Accelerating Large Language Model Reasoning via Speculative Search](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25di/wang25di.pdf)

### Associated with
- **LLM-as-a-judge** (measurements)
  > “To develop the reward model, we initially employ GPT-4 to assess various MRPAs across all test samples.”
  - [MMRole: A Comprehensive Framework for Developing and Evaluating Multimodal Role-Playing Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/a5c7206fd66e8314bb21a04492359353-Paper-Conference.pdf)
- **Human evaluation** (measurements)
  > “we engage four human evaluators to compare responses from two MRPAs on each metric for every question in the validation set.”
  - [MMRole: A Comprehensive Framework for Developing and Evaluating Multimodal Role-Playing Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/a5c7206fd66e8314bb21a04492359353-Paper-Conference.pdf)
