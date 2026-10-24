# Informalization
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Statement informalization, Proof informalization  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats informalization as translating a formal representation back into natural language. Most definitions place this in mathematics, as a formal SMT-LIB problem, a mathematical statement, or a proof rendered as a word problem, pure math prompt, description, or explanation; a broader formulation defines it as converting a formal-language string into a natural-language string, with code summarization given as an example. A few papers also treat it as related to Autoformalization, describing it as the inverse process of formalization, and some formulations add that the translation should preserve meaning or soundness.

**Variants.** A smaller line of work distinguishes statement informalization from proof informalization. In that usage, statement informalization translates a formal mathematical statement into natural language, while proof informalization translates a formal proof into a natural-language explanation; the former is described as using rich contextual information such as theorem dependencies, and the latter as using term explanations for each translation step. Other papers focus on formal SMT-LIB math problems that are turned into new word problems or pure math prompts.

**Space of elicitation and scores.** No measurement instrument is linked to it. Where scoring is described, one paper re-informalizes formal statements with LLMs and computes a semantic score by comparing the embeddings of the re-informalized text and the original statement; where elicitation is described, papers mention providing contextual information such as theorem dependencies for statement informalization and term explanations for proof informalization.

**What it is taken as evidence of.** Papers do not present a prevailing construct that this behavior directly measures. The only linked construct is Semantic consistency, and it is treated as related to Informalization rather than measured by it: one paper describes semantic consistency as evaluating preservation of the original meaning by informalizing candidate statements and comparing the similarity between the original and informalized texts.

## Sources

**[Neuro-Symbolic Data Generation for Math Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/29d319f7c1513c9ecd81d3a6e9632a6e-Paper-Conference.pdf)**
> Translating a formal SMT-LIB math problem back into a natural-language word problem or pure math prompt.

**[Herald: A Natural Language Annotated Lean 4 Dataset](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c2bb821410066459be64d03a4dc5719-Paper-Conference.pdf) (as "Statement informalization")**
> The specific task of translating a mathematical statement from its formal language representation into natural language.

**[Herald: A Natural Language Annotated Lean 4 Dataset](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c2bb821410066459be64d03a4dc5719-Paper-Conference.pdf) (as "Proof informalization")**
> The specific task of translating a mathematical proof from its formal language representation into a natural language explanation.

## Relationships

### Associated with
- **Autoformalization** (behaviors tasks)
  > several studies [19–21] explore the performance of LLMs for the inverse process of formalization, i.e., informalization, which translates formal statements back into natural language. (Section 2)
  - [Autoformalize Mathematical Statements by Symbolic Equivalence and Semantic Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/6034a661584af6c28fd97a6f23e56c0a-Paper-Conference.pdf)
- **Semantic consistency** (constructs)
  > semantic consistency evaluates the preservation of the original meaning by informalizing the candidates and computing the similarity between the embeddings of the original and informalized texts. (Abstract)
  - [Autoformalize Mathematical Statements by Symbolic Equivalence and Semantic Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/6034a661584af6c28fd97a6f23e56c0a-Paper-Conference.pdf)
