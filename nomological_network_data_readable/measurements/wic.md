# WiC
**Type:** Measurement  
**Referenced in:** 23 papers  
**Also known as:** WIC  

## State of the Field

**What it is.** Across papers, WiC is most commonly described as the Word-in-Context dataset or benchmark for word sense disambiguation: models judge whether a target word has the same meaning in two sentences or contexts. Several definitions also place it within SuperGLUE, while a smaller line makes the format more explicit by calling it a binary classification benchmark for polysemy disambiguation and noting that all WiC datasets are class-balanced with a 50% chance baseline. Most descriptions stay with word sense disambiguation, though one definition frames it as evaluating context-sensitive word representations and another groups it under natural language inference while still using the same-meaning-across-contexts test.

**What it is claimed to measure.** Relationship claims connect WiC to four behavioral indicators and no constructs. The prevailing usage is that papers use WiC to measure word sense disambiguation, including descriptions that it is a word sense disambiguation dataset or that it challenges models on contextual word sense disambiguation. One paper also uses it to measure language understanding task performance, one uses it to measure natural language inference, and one uses it to measure zero-shot task performance, so the reported measurement claims converge most clearly on word sense disambiguation but also extend to a few broader framings.

**Space of uses.** Papers usually use WiC as one task in a larger evaluation suite rather than as a standalone protocol. Papers link it to one measurement instrument, SuperGLUE, and many definitions position it as a SuperGLUE task; one paper reports that WiC is measured by SuperGLUE. Across evaluation setups it commonly appears alongside SST-2, RTE, BoolQ, WSC, and COPA.

## Sources

**[Batch Calibration: Rethinking Calibration for In-Context Learning and Prompt Engineering](https://proceedings.iclr.cc/paper_files/paper/2024/file/003e438cf04e3caf0a5c908495e484fe-Paper-Conference.pdf)**
> The Word-in-Context dataset, a benchmark for word sense disambiguation that involves determining if a word has the same meaning in two different sentences.

**[Addax: Utilizing Zeroth-Order Gradients to Improve Memory Efficiency and Performance of SGD for Fine-Tuning Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/03560f68b1238221e7c07ad01c4b47aa-Paper-Conference.pdf) (as "WIC")**
> A word-in-context benchmark requiring judgment of whether a word has the same meaning in two contexts.

## Relationships

### → WiC
- **Word sense disambiguation** (behaviors tasks) — *measured_by*
  > word disambiguation: WiC (Pilehvar & Camacho-Collados, 2019); (Section 5.1)
  - [Batch Calibration: Rethinking Calibration for In-Context Learning and Prompt Engineering](https://proceedings.iclr.cc/paper_files/paper/2024/file/003e438cf04e3caf0a5c908495e484fe-Paper-Conference.pdf)
- **Natural language inference** (behaviors tasks) — *measured_by*
  > Natural language inference: CB (De Marneff et al., 2019) and WiC (Pilehvar & Camacho-Collados, 2018) from superGLUE (Wang et al., 2019) (Section 5.1).
  - [Two-stage LLM Fine-tuning with Less Specialization and More Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/597254dc45be8c166d3ccf0ba2d56325-Paper-Conference.pdf)
- **Zero-shot task performance** (behaviors tasks) — *measured_by*
  > “Table 1. Comparison of zero-evaluation performance... WIC ↑”
  - [MERIT: Maximum-normalized Element-wise Ratio for Language Model Large-batch Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25u/luo25u.pdf)

### Associated with
- **SuperGLUE** (measurements)
  > “we use six NLU tasks from the SuperGLUE benchmark to evaluate the performance of the language model ... including ... WiC”
  - [MEPT: Mixture of Expert Prompt Tuning as a Manifold Mapper](https://aclanthology.org/2025.emnlp-main.823.pdf)
