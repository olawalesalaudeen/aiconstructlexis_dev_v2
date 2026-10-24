# Audio classification
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Sound classification  

## State of the Field

**Space of definitions.** Most papers describe this behavior as assigning an audio clip to a sound category or label, often as one of the standard audio tasks discussed alongside captioning. The prevailing formulation uses predefined class labels, with one definition allowing one or more labels per clip; one paper also notes that the model may output label names or descriptions in text form rather than a label index. A smaller line of work uses the name sound classification and frames it as assigning sound clips to semantic categories using tokenizer-derived representations.

**Variants.** Papers mostly use the name audio classification, though some use sound classification for a closely matched task. The categories studied are not uniform: one definition gives examples such as sound event, genre, and speaker-related classes, while another refers more generally to semantic categories for sound clips.

**Space of elicitation and scores.** Papers operationalize this behavior with four measurement instruments, used as audio classification benchmarks. FSD50K is the most frequently linked instrument, and papers also measure it with ESC-50, GTZAN, and US8K; one result table labels FSD50K as 'FSD50k CLS - mAP'.

**What it is taken as evidence of.** Across these papers, no construct is linked to audio classification, so the papers do not specify a named construct that this behavior is taken to indicate.

## Sources

**[Aligned Better, Listen Better for Audio-Visual Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0c79d6ed1788653643a1ac67b6ea32a7-Paper-Conference.pdf)**
> Assigning an audio clip to a sound category or label.

**[ALMTokenizer: A Low-bitrate and Semantic-rich Audio Codec Tokenizer for Audio Language Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25q/yang25q.pdf) (as "Sound classification")**
> Assigning sound clips to semantic categories using tokenizer-derived representations.

## Relationships

### Audio classification →
- **FSD50K** (measurements) — *measured_by*
  > FSD50k CLS - mAP (Table 1)
  - [Audio Flamingo 2: An Audio-Language Model with Long-Audio Understanding and Expert Reasoning Abilities](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ghosh25b/ghosh25b.pdf)
