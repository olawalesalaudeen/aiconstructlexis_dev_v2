# Code translation
**Type:** Behavior  
**Referenced in:** 14 papers  
**Also known as:** Code transpilation  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats this as converting a program or source code snippet from one programming language to another while preserving functionality, often phrased as producing a functionally equivalent snippet. Most definitions align on cross-language conversion as the task, and some explicitly frame it as automatic transformation. A smaller line of work broadens the scope to translation across syntax or language dialects, including substituting Verus-incompatible Rust code with Verus-compatible alternatives.

**Variants.** Papers use both code translation and code transpilation, sometimes shortened to transpilation, for this behavior, and one snippet also calls it learned code translation. The studied settings range from general-purpose language pairs, including C++-to-Python and Java-to-C++ examples, to translation into Verus-supported Rust syntax, where papers describe translating Python and Rust programs or replacing standard Rust fragments with Verus-compatible ones.

**Space of elicitation and scores.** Only one measurement instrument is linked to it: HumanEval-X. Papers treat this as a benchmarked behavior, and one report describes a result that "underperforms for Java-to-C++ translation on the HumanEval-X benchmark (48.8% versus 82.3%)."

**What it is taken as evidence of.** Papers do not link this behavior to any construct.

## Sources

**[ExeCoder: Empowering Large Language Models with Executability Representation for Code Translation](https://aclanthology.org/2025.emnlp-main.362.pdf)**
> The observable task of converting a source code snippet from one programming language into a functionally equivalent snippet in another programming language.

**[Verified Code Transpilation with LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/48bb60a0c0aebb4142bf314bd1a5c6a0-Paper-Conference.pdf) (as "Code transpilation")**
> The observable task of automatically transforming source code from one programming language to another.

## Relationships

### Code translation →
- **HumanEval-X** (measurements) — *measured_by*
  > underperforms for Java-to-C++ translation on the HumanEval-X benchmark (48.8% versus 82.3%).
  - [PAK-UCB Contextual Bandit: An Online Learning Approach to Prompt-Aware Selection of Generative Models and LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25m/hu25m.pdf)
