# Self-verification
**Type:** Behavior  
**Referenced in:** 20 papers  
**Also known as:** Answer verification, Double-checking  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is a second-pass check of an already produced answer or solution, aimed at judging its correctness, reliability, or consistency before acceptance. Most descriptions make the model verify its own output by generating and executing a checking procedure, often code-based, by comparing answers from different prompts and accepting the answer only when they match, or by checking consistency with a given context, sometimes framed as entailment. Depending on the formulation, the judgment can come from the same model, from agreement across prompts, from a completed continuation or peer judgment, from a reviewer agent, or from comparison with a reference answer; a smaller line of work extends the behavior to re-solving or double-checking after a failed check.

**Variants.** Papers use several closely related names, most often answer verification and self-verification, with one paper calling it double-checking. The studied variants include code-based self-verification that can review and adjust a solution after a false result, consistency-based checking across prompts, entailment-style context-grounded verification, reviewer cross-checking across complementary sources or modalities, and a self-verification module that sends the model back to solve again when the prior reasoning is judged incorrect. Related task settings include table question answering and other binary decision tasks.

**Space of elicitation and scores.** Papers link this behavior to one measurement instrument, Game of 24, presented as a problem setting where verification is easier than solving; the recorded link is related rather than measured_by. Apart from that related link, papers operationalize self-verification procedurally, such as executing verification code, checking whether answers from different prompts match, framing verification as entailment against context, or using a reviewer to cross-check an answer with complementary sources. In a related answer-verification setup, one paper also describes outcome labels of Correct, Incorrect, and Invalid when comparing a response with a reference answer.

**What it is taken as evidence of.** Papers link self-verification to six constructs rather than repeatedly using it as evidence of one construct. It is related to Calibration, Context faithfulness, and Self-awareness; one paper claims a causal relationship from Metacognition to Self-verification; and other papers claim causal relationships from Self-verification to Reasoning and Reliability. Across the papers, these construct links are mixed in both content and direction.

## Sources

**[Large Language Model Cascades with Mixture of Thought Representations for Cost-Efficient Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5de11e930c1bbfda5d4fc9d2b0924032-Paper-Conference.pdf) (as "Answer verification")**
> The observable behavior of generating and executing a specific procedure, typically code-based, to check the validity of a previously derived answer.

**[AutoMix: Automatically Mixing Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ecda225cb187b40ea8edc1f46b03ffda-Paper-Conference.pdf)**
> The observable process where a model assesses the correctness or reliability of its own generated output, typically by checking for consistency with a given context.

**[Do NOT Think That Much for 2+3=? On the Overthinking of Long Reasoning Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25bx/chen25bx.pdf) (as "Double-checking")**
> The observable behavior of generating a subsequent solution to verify or re-evaluate a previously generated solution, often using the same reasoning strategy.

## Relationships

### Self-verification →
- **Iterative refinement** (behaviors tasks) — *causes*
  > Incorporated with CSV, the model becomes capable of using code to verify answers, then reviewing and adjusting how it arrived at the solution if the verification result is False, aiming at obtaining the correct answer.
  - [Solving Challenging Math Word Problems Using GPT-4 Code Interpreter with Code-based Self-Verification](https://proceedings.iclr.cc/paper_files/paper/2024/file/12c45a68e8433b21b91cd47731387fa4-Paper-Conference.pdf)
- **Self-correction** (behaviors tasks) — *causes*
  > ...enables LLMs to self-correct their outputs through self-verification.
  - [ReVISE: Learning to Refine at Test-Time via Intrinsic Self-Verification](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lee25ab/lee25ab.pdf)
- **Reliability** (constructs) — *causes*
  > Reviewer agent – Verifies and refines the initial answer to improve accuracy and reliability (Section 3)
  - [DocAgent: An Agentic Framework for Multi-Modal Long-Context Document Understanding](https://aclanthology.org/2025.emnlp-main.893.pdf)

### Associated with
- **Context faithfulness** (constructs)
  > Furthermore, AutoMix is designed with a dialogue-related or context-grounded reasoning setup in mind for effective self-verification, which does not include tasks like factual question-answering and commonsense reasoning. (Section 6)
  - [AutoMix: Automatically Mixing Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ecda225cb187b40ea8edc1f46b03ffda-Paper-Conference.pdf)
- **Calibration** (constructs)
  > "prior works have shown self-verification is not particularly effective for reasoning tasks and is often noisy and ill-calibrated"
  - [AutoMix: Automatically Mixing Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ecda225cb187b40ea8edc1f46b03ffda-Paper-Conference.pdf)
- **Table question answering** (behaviors tasks)
  > Most LLM-based TableQA methods can be divided into three phases: question decomposition (Lewkowycz et al., 2022; Liu et al., 2022; Fu et al., 2022; Pasupat & Liang, 2015), sub-question TableQA reasoning and answer verification (Madaan et al., 2024; Ni et al., 2023).
  - [Triples as the Key: Structuring Makes Decomposition and Verification Easier in LLM-based TableQA](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e50b663324972bb8cc7b5c06a059438-Paper-Conference.pdf)
- **Game of 24** (measurements)
  > It is particularly useful for problems where verification is significantly easier than solving the problem itself, e.g., the Game of 24 (Yao et al., 2024). (Section 2.2)
  - [DOTS: Learning to Reason Dynamically in LLMs via Optimal Reasoning Trajectories Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e5d6f9ac33ba9349ba7b2be9f21bad9-Paper-Conference.pdf)
- **Binary decision making** (behaviors tasks)
  > A binary decision task, such as yes-no QA or answer verification, represents a major real-world scenario (Section 3)
  - [Correcting Negative Bias in Large Language Models through Negative Attention Score Alignment](https://aclanthology.org/2025.naacl-long.503.pdf)
- **Self-awareness** (constructs)
  > “Self-awareness, i.e., the ability to assess and correct one’s generation”
  - [ReVISE: Learning to Refine at Test-Time via Intrinsic Self-Verification](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lee25ab/lee25ab.pdf)
- **Metacognition** (constructs)
  > Metacognition: This assesses prompts in explicitly guiding models to reason, self-monitor, and self-verify outputs to meet expectations and enhance reliability (e.b. Wang and Zhao (2024)).
  - [What Makes a Good Natural Language Prompt?](https://aclanthology.org/2025.acl-long.292.pdf)
- **Reasoning** (constructs)
  > “The core idea of ReVISE is to enable LLMs to verify their reasoning processes”
  - [ReVISE: Learning to Refine at Test-Time via Intrinsic Self-Verification](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lee25ab/lee25ab.pdf)
