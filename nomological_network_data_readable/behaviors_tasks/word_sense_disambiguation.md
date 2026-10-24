# Word sense disambiguation
**Type:** Behavior  
**Referenced in:** 22 papers  
**Also known as:** Sense labeling, Word-sense association, Homonym disambiguation, Pun interpretation, Polysemy disambiguation, Sense-aware task performance, Lexical disambiguation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is a WiC-style judgment: given a target word and two sentences, the model decides whether the word is used with the same sense in both, typically as a binary same-versus-different decision. A smaller line of work instead frames it as inventory-based sense selection in a single context, where the task is to choose the most appropriate sense, label, or candidate definition for a target word from a predefined pool.

**Variants.** Papers use several neighboring names and settings for this behavior. They include sense labeling, polysemy disambiguation in the WiC formulation, homonym disambiguation shaped by context and POS, pun interpretation and word-sense association, where pun and alternative senses are linked to the right words in context, and lexical disambiguation in multi-domain translation, where domain context determines the correct translation of a word with multiple meanings.

**Space of elicitation and scores.** Papers link the behavior to five measurement instruments. WiC is the most common and is described as a Word-in-Context challenge for contextual word sense disambiguation; the others are 42D and HardEN as general-domain test sets, SemEval-2007 as a validation set, and SuperGLUE as a benchmark that includes WiC.

**What it is taken as evidence of.** Papers do not present a broad shared view of this behavior as evidence of multiple constructs. The only linked construct is positional bias, and it appears through a related link: one paper says some LLMs may rely on superficial heuristics such as positional order rather than evaluating definitions purely on semantic appropriateness in unbiased word sense disambiguation tasks.

## Sources

**[Learn more, but bother less: parameter efficient continual learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/b0bc711f48724237b38823c4d9cee10b-Paper-Conference.pdf)**
> Determining whether a target word is used with the same sense in two different sentences.

**[Towards General-Domain Word Sense Disambiguation: Distilling Large Language Model into Compact Disambiguator](https://aclanthology.org/2025.emnlp-main.45.pdf) (as "Sense labeling")**
> The task of assigning a specific sense label from a predefined inventory to a polysemous word within a given sentence from a corpus.

**[Context and POS in Action: A Comparative Study of Chinese Homonym Disambiguation in Human and Language Models](https://aclanthology.org/2025.emnlp-main.1404.pdf) (as "Homonym disambiguation")**
> The task of identifying the correct meaning of a word that has the same spelling or pronunciation as another word but a different meaning, based on its context.

**[Pun Unintended: LLMs and the Illusion of Humor Understanding](https://aclanthology.org/2025.emnlp-main.1419.pdf) (as "Pun interpretation")**
> The observable task of associating each word in an identified pun pair with its correct meaning or sense in the given context.

**[Pun Unintended: LLMs and the Illusion of Humor Understanding](https://aclanthology.org/2025.emnlp-main.1419.pdf) (as "Word-sense association")**
> Linking a word to its correct meaning in context, particularly distinguishing between literal and figurative senses in puns.

**[Multilinguality Does not Make Sense: Investigating Factors Behind Zero-Shot Cross-Lingual Transfer in Sense-Aware Tasks](https://aclanthology.org/2025.emnlp-main.1773.pdf) (as "Polysemy disambiguation")**
> Producing a binary judgment on whether a polysemous word is used in the same sense across two different sentences.

**[DMDTEval: An Evaluation and Analysis of LLMs on Disambiguation in Multi-domain Translation](https://aclanthology.org/2025.emnlp-main.309.pdf) (as "Lexical disambiguation")**
> Selecting the correct translation of a word with multiple meanings based on domain context during translation.

## Relationships

### Word sense disambiguation →
- **WiC** (measurements) — *measured_by*
  > word disambiguation: WiC (Pilehvar & Camacho-Collados, 2019); (Section 5.1)
  - [Batch Calibration: Rethinking Calibration for In-Context Learning and Prompt Engineering](https://proceedings.iclr.cc/paper_files/paper/2024/file/003e438cf04e3caf0a5c908495e484fe-Paper-Conference.pdf)
- **WordNet** (measurements) — *measured_by*
  > "we use WordNet (Miller et al., 1990), the most widely adopted resource in WSD research"
  - [Towards General-Domain Word Sense Disambiguation: Distilling Large Language Model into Compact Disambiguator](https://aclanthology.org/2025.emnlp-main.45.pdf)
- **SuperGLUE** (measurements) — *measured_by*
  > The SuperGLUE benchmark comprises advanced language understanding tasks... word sense disambiguation (WiC; (Pilehvar and Camacho-Collados, 2019))... (Section 4.1)
  - [SSMLoRA: Enhancing Low-Rank Adaptation with State Space Model](https://aclanthology.org/2025.naacl-long.230.pdf)

### Associated with
- **Positional bias** (constructs)
  > This pattern highlights a potential limitation in some LLMs: rather than evaluating definitions purely on semantic appropriateness, they may rely on superficial heuristics such as positional order, which may compromise their reliability and generalization in unbiased WSD tasks (Section 3.2).
  - [Do Large Language Models Understand Word Senses?](https://aclanthology.org/2025.emnlp-main.1720.pdf)
