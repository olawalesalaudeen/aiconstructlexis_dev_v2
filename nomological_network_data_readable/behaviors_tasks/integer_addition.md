# Integer addition
**Type:** Behavior  
**Referenced in:** 16 papers  
**Also known as:** Addition, Multi-digit addition, Two-integer addition, Numerical addition  

## State of the Field

**Space of definitions.** Across papers, the prevailing use is as a task of producing the correct sum for two integers or multi-digit numbers given as digits or numerical expressions. Some definitions extend this to two or more integer operands, while others focus specifically on two-number or decimal multi-digit addition. Several formulations make the procedure explicit through digit-wise computation, carry propagation, forward or reverse digit order, or step-by-step generation, and one paper also presents it in natural-language form.

**Variants.** Papers study several named variants, including addition, multi-digit addition, two-integer addition, and numerical addition. Common settings include decimal multi-digit problems in forward or reverse order, "easy carry" and "hard carry" conditions, standard numeric inputs or symbolic remapping, and in-context examples where the query is answered in different languages. Another recurring variant elicits digit-by-digit intermediate steps rather than only the final sum.

**Space of elicitation and scores.** No measurement instrument is linked to this behavior.

**What it is taken as evidence of.** Among linked constructs, papers most often tie integer addition to length generalization: some use it to measure length generalization, and another link describes integer addition as related to whether standard Transformers show little to no length generalization. Papers also use it to measure algorithmic reasoning and mathematical reasoning. Other links treat it as related to chain-of-thought reasoning and compositional generalization, with one additional construct also linked, so papers do not use a single relational framing.

## Sources

**[Position Coupling: Improving Length Generalization of Arithmetic Transformers Using Task Structure](https://proceedings.neurips.cc/paper_files/paper/2024/file/27aa3a0e6d63db269977bb2df5607cb8-Paper-Conference.pdf)**
> The task of calculating the sum of two or more integer operands, presented as a sequence of digits.

**[Mastering Symbolic Operations: Augmenting Language Models with Compiled Neural Networks](https://proceedings.iclr.cc/paper_files/paper/2024/file/72679d76c80e079c70fe5977d21ed1e4-Paper-Conference.pdf) (as "Addition")**
> Performing decimal addition of two multi-digit numbers, either in forward or reverse digit order, with or without carry propagation.

**[Can Language Models Learn to Skip Steps?](https://proceedings.neurips.cc/paper_files/paper/2024/file/504fa7e518da9d1b53a233ed20a38b46-Paper-Conference.pdf) (as "Multi-digit addition")**
> The arithmetic task of adding two numbers with multiple digits, often performed by generating step-by-step calculations for each digit place.

**[Do Large Language Models Truly Grasp Addition? A Rule-Focused Diagnostic Using Two-Integer Arithmetic](https://aclanthology.org/2025.emnlp-main.681.pdf) (as "Two-integer addition")**
> The observable task of computing the sum of two integers, either in standard numeric form or under symbolic remapping, serving as a diagnostic for algorithmic reasoning.

**[Everything Everywhere All at Once: LLMs can In-Context Learn Multiple Tasks in Superposition](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiong25a/xiong25a.pdf) (as "Numerical addition")**
> Generating the correct sum of two numbers when presented with arithmetic expressions in numerical form.

## Relationships

### Associated with
- **Length generalization** (constructs)
  > Standard Transformers trained from scratch on addition and other arithmetic tasks exhibit little to no length generalization (Section 1)
  - [What Algorithms can Transformers Learn? A Study in Length Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/45ed1a72597594c097152ef9cc187762-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks)
  > With the input format described in Section 3.1, there exists a depth-1 two-head decoder-only Transformer with coupled positions that solves the addition task with next-token prediction. (Theorem 5.1)
  - [Position Coupling: Improving Length Generalization of Arithmetic Transformers Using Task Structure](https://proceedings.neurips.cc/paper_files/paper/2024/file/27aa3a0e6d63db269977bb2df5607cb8-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs)
  > what architectural design choices, dataset characteristics, and training pipeline variants are required to learn a many-step reasoning process like multi-digit addition? (Section 1)
  - [Transformers Can Do Arithmetic with the Right Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/c35986bc1ee29b31c1011481b77fe540-Paper-Conference.pdf)
- **Compositional generalization** (constructs)
  > These findings reveal a core limitation in LLMs’ compositional generalization for elementary arithmetic. (Contributions)
  - [Do Large Language Models Truly Grasp Addition? A Rule-Focused Diagnostic Using Two-Integer Arithmetic](https://aclanthology.org/2025.emnlp-main.681.pdf)
- **Pattern matching** (constructs)
  > These findings demonstrate that current LLMs address elementary addition via pattern matching, not robust rule induction... (Abstract)
  - [Do Large Language Models Truly Grasp Addition? A Rule-Focused Diagnostic Using Two-Integer Arithmetic](https://aclanthology.org/2025.emnlp-main.681.pdf)
- **Carry propagation** (behaviors tasks)
  > The task isolates a single algorithm with two components, digit-wise addition and carry propagation... (Our diagnostic lens: two-integer addition.)
  - [Do Large Language Models Truly Grasp Addition? A Rule-Focused Diagnostic Using Two-Integer Arithmetic](https://aclanthology.org/2025.emnlp-main.681.pdf)
- **Algorithmic reasoning** (constructs)
  > “To study algorithmic reasoning in a sterile laboratory setting, the academic community focuses on simple arithmetic test problems like addition.”
  - [Transformers Can Do Arithmetic with the Right Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/c35986bc1ee29b31c1011481b77fe540-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs)
  > “we focus on simple arithmetic test problems like addition”
  - [Transformers Can Do Arithmetic with the Right Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/c35986bc1ee29b31c1011481b77fe540-Paper-Conference.pdf)
