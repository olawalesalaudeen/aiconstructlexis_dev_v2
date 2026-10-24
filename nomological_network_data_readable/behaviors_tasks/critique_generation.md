# Critique generation
**Type:** Behavior  
**Referenced in:** 16 papers  
**Also known as:** Providing feedback, Response critique, Correction suggestion generation, Chain-of-thought verification, Natural language critique, Single-response critique generation, Solution critique, Textual critique generation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is text-based feedback about a response, sentence, or solution: papers most commonly describe outputs that identify errors, weaknesses, or unfaithful spans and often suggest fixes or improvements. Some authors make the behavior more evaluative, pairing the critique with a judgment or with criteria-based justification, while others cast it as guidance to another agent during collaboration. As "Teaching Language Models to Critique via Reinforcement Learning" puts it, the critique may include "an analysis of the solution’s strengths and weaknesses," "actionable improvement suggestions," and "a final judgment of correctness."

**Variants.** Variants appear in collaborative exchanges, where a critic agent gives feedback on another agent’s answer, and in candidate-response comparison, where the output is a list of strengths and weaknesses for each response. Other papers specialize the behavior to factuality judgments that say which document parts support or contradict a claim, to mathematical or table-reasoning error review, and to step-by-step verification rationales before a final Yes/No decision. Some definitions also narrow it to single-response critique or to correction suggestions after an inconsistency is found.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers instead operationalize the behavior through the generated text itself, such as critiques that detail an error span and suggest a fix, strengths-and-weaknesses lists for responses, support-or-contradiction explanations for factuality, or a verbalized rationale before a final yes/no judgment. In "MAMM-Refine: A Recipe for Improving Faithfulness in Generation with Multi-Agent Collaboration," the critique output is described as one that "detail[s] the error span ... and suggest[s] a fix."

**What it is taken as evidence of.** Papers do not converge on a single construct that this behavior reflects. The linked constructs are Reasoning and Robustness, but the recorded links are causal: a paper claims a causal relationship from critique generation to Reasoning, saying the critiques help correct flawed reasoning steps, and another paper claims a causal relationship from critique generation to Robustness. Beyond constructs, a paper also claims a causal relationship from critique generation to Self-correction, and the Robustness link is additionally recorded in the reverse direction, as a causal relationship from Robustness to critique generation.

## Sources

**[Self-Generated Critiques Boost Reward Modeling for Language Models](https://aclanthology.org/2025.naacl-long.573.pdf)**
> The observable behavior of producing a textual explanation that identifies error spans in a generated sentence and suggests fixes.

**[ACC-Collab: An Actor-Critic Approach to Multi-Agent LLM Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/e187897ed7780a579a0d76fd4a35d107-Paper-Conference.pdf) (as "Providing feedback")**
> Generating critique or guidance on another agent's answer during a collaborative exchange.

**[An Architecture Search Framework for Inference-Time Techniques](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saad-falcon25a/saad-falcon25a.pdf) (as "Response critique")**
> Producing strengths and weaknesses for candidate responses so they can be improved or selected.

**[Enhancing Goal-oriented Proactive Dialogue Systems via Consistency Reflection and Correction](https://aclanthology.org/2025.acl-long.1050.pdf) (as "Correction suggestion generation")**
> The observable behavior of a model, after identifying an inconsistency, generating a specific suggestion for how to improve or correct the output.

**[Generative Verifiers: Reward Modeling as Next-Token Prediction](https://proceedings.iclr.cc/paper_files/paper/2025/file/214308a2d5e3f83ef9ad2739e1cbc46d-Paper-Conference.pdf) (as "Chain-of-thought verification")**
> The observable behavior of a model generating an explicit, step-by-step rationale to critique a solution before making a final correctness judgment.

**[Generative Judge for Evaluating Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/747dc7c6566c74eb9a663bcd8d057c78-Paper-Conference.pdf) (as "Natural language critique")**
> Generating structured, explanatory text that justifies an evaluation decision by referencing specific criteria and response content.

**[Generative Judge for Evaluating Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/747dc7c6566c74eb9a663bcd8d057c78-Paper-Conference.pdf) (as "Single-response critique generation")**
> Producing a natural language critique that identifies shortcomings in a single model-generated response relative to the query and evaluation criteria.

**[LLaMA-Berry: Pairwise Optimization for Olympiad-level Mathematical Reasoning via O1-like Monte Carlo Tree Search](https://aclanthology.org/2025.naacl-long.375.pdf) (as "Solution critique")**
> Identifying flaws, errors, or inefficiencies in a generated mathematical solution through self-generated feedback.

**[Improving Model Factuality with Fine-grained Critique-based Evaluator](https://aclanthology.org/2025.acl-long.400.pdf) (as "Textual critique generation")**
> Producing natural language explanations that justify a factuality judgment for a claim, indicating which parts of the document support or contradict it.

## Relationships

### Critique generation →
- **Reasoning** (constructs) — *causes*
  > Additionally, these critiques help the policy language model (LM) correct flawed reasoning steps, resulting in improved accuracy in refined responses.
  - [Self-Generated Critiques Boost Reward Modeling for Language Models](https://aclanthology.org/2025.naacl-long.573.pdf)
- **Self-correction** (behaviors tasks) — *causes*
  > Additional studies confirm the utility of generated critiques for Critic-RM in identifying and correcting mistakes made by LLMs.
  - [Self-Generated Critiques Boost Reward Modeling for Language Models](https://aclanthology.org/2025.naacl-long.573.pdf)
- **Robustness** (constructs) — *causes*
  > This mechanism enhances the model’s robustness in complex and uncertain environments and fosters a dynamic learning phase, facilitating continuous improvement through error identification and rectification. (Section 3.4.1)
  - [CARE: A Disagreement Detection Framework with Concept Alignment and Reasoning Enhancement](https://aclanthology.org/2025.emnlp-main.671.pdf)
