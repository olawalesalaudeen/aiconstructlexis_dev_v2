# String manipulation
**Type:** Behavior  
**Referenced in:** 14 papers  
**Also known as:** Unscrambling, Substring identification, Vowel removal, String transformation, Capitalization, String normalization, Substring searching, Character retrieval, Multi-step translation, Substring detection, Character manipulation  

## State of the Field

**Space of definitions.** Across the papers, the dominant framing treats this behavior as transforming strings or character sequences, either by explicit operations such as slicing, concatenation, reversing, splitting, and reordering, or by inferring a latent rule that maps an input string to an output string. Success is usually the production of the required transformed string, designated character, or selected substring, including tasks described as "fundamental tasks such as indexing, slicing, and concatenation" and tasks that represent a mapping between pairs of strings as a program. A smaller line of work formulates it as a presence judgment, for example asking whether a substring is part of a target word.

**Variants.** The variants are heterogeneous, with string transformation the most common name and broader labels such as string analysis and manipulation and character manipulation also used. Substring-focused variants cover locating a substring, determining whether it is present, or selecting one whose reversal matches a given definition. Other settings include unscrambling a randomly permuted sentence into a grammatically and semantically valid one, removing vowels while copying the remaining characters, normalizing noisy strings, capitalizing the first letter, retrieving a designated character from an eight-character string, and composing multiple translation steps defined by circular shifts and bijective mappings.

**Space of elicitation and scores.** Only one measurement instrument is linked in the papers: String manipulation is measured by SyGuS. The recorded use comes from a paper that evaluates "string manipulation tasks from the SYGUS benchmark," so the linked instrument is presented as a benchmark.

**What it is taken as evidence of.** Papers do not link this behavior to any construct.

## Sources

**[StringLLM: Understanding the String Processing Capability of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e4013f157410cb7612701b318fb4ac2-Paper-Conference.pdf)**
> Transforming strings by operations such as slicing, concatenation, reversing, splitting, or reordering characters.

**[A Percolation Model of Emergence: Analyzing Transformers Trained on a Formal Language](https://proceedings.iclr.cc/paper_files/paper/2025/file/5cd2b0a6b7423af6369cbdbbb228e8d0-Paper-Conference.pdf) (as "Unscrambling")**
> The task of reordering a randomly permuted set of words to form a grammatically and semantically valid sentence from the formal language.

**[MrT5: Dynamic Token Merging for Efficient Byte-level Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8e9dd32cb9f9bff397f1a7ebd07010f2-Paper-Conference.pdf) (as "Vowel removal")**
> Removing vowels from an input character sequence while copying the remaining characters.

**[MrT5: Dynamic Token Merging for Efficient Byte-level Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8e9dd32cb9f9bff397f1a7ebd07010f2-Paper-Conference.pdf) (as "Substring identification")**
> Selecting a substring from an input string that satisfies a semantic matching condition with a definition.

**[MIRAGE: Evaluating and Explaining Inductive Reasoning Process in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b782a3462ee9d566291cff148333ea9b-Paper-Conference.pdf) (as "String transformation")**
> An inductive reasoning task where the model must infer and apply rules to strings of characters, involving operations like concatenation and replication.

**[Heads up! Large Language Models Can Perform Tasks Without Your Instruction via Selective Attention Head Masking](https://raw.githubusercontent.com/mlresearch/v267/main/assets/han25l/han25l.pdf) (as "Capitalization")**
> Transforming text to have the first letter capitalized, such as converting 'hello' to 'Hello'.

**[Programming Every Example: Lifting Pre-training Data Quality Like Experts at Scale](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25aa/zhou25aa.pdf) (as "String normalization")**
> Replacing noisy or inconsistent string patterns in text with clean, standardized versions.

**[StringLLM: Understanding the String Processing Capability of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e4013f157410cb7612701b318fb4ac2-Paper-Conference.pdf) (as "Substring searching")**
> Locating the position or presence of a substring within a larger string.

**[Everything Everywhere All at Once: LLMs can In-Context Learn Multiple Tasks in Superposition](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiong25a/xiong25a.pdf) (as "Character retrieval")**
> Given an eight-character string, outputting a designated character from the string according to the retrieval task.

**[On the Power of Context-Enhanced Learning in LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhu25p/zhu25p.pdf) (as "Multi-step translation")**
> The observable process of transforming an input string through a sequence of d translation steps, each involving a circular shift and a bijective mapping defined by a phrasebook, resulting in a final output string.

**[LLM The Genius Paradox: A Linguistic and Math Expert's Struggle with Simple Word-based Counting Problems](https://aclanthology.org/2025.naacl-long.172.pdf) (as "Substring detection")**
> The observable behavior of determining whether a specified substring is present within a target word.

**[Byte Latent Transformer: Patches Scale Better Than Tokens](https://aclanthology.org/2025.acl-long.453.pdf) (as "Character manipulation")**
> The task of performing operations on the characters within a sequence, such as spelling correction or reordering.

## Relationships

### String manipulation →
- **SyGuS** (measurements) — *measured_by*
  > We implemented this technique in a tool HYSYNTH and evaluated it on 299 PBE tasks from three domains: ARC grid-based puzzles [14], tensor manipulation tasks from TFCODER [36], and string manipulation tasks from the SYGUS benchmark [5]
  - [HYSYNTH: Context-Free LLM Approximation for Guiding Program Synthesis](https://proceedings.neurips.cc/paper_files/paper/2024/file/1c9c85bae6161d52182d0fe2f3640512-Paper-Conference.pdf)
- **Exact match** (measurements) — *measured_by*
  > Exact Match / Per Token Accuracy. Used for evaluating unscrambling. (Section 4)
  - [A Percolation Model of Emergence: Analyzing Transformers Trained on a Formal Language](https://proceedings.iclr.cc/paper_files/paper/2025/file/5cd2b0a6b7423af6369cbdbbb228e8d0-Paper-Conference.pdf)
