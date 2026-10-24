# Music captioning
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

**Space of definitions.** The available usage treats music captioning as generating descriptive text for music clips. In ALMTokenizer: A Low-bitrate and Semantic-rich Audio Codec Tokenizer for Audio Language Modeling, it is used to evaluate the understanding capabilities of the audio tokenizer in a language model, and the snippets refer both to "music captioning" and to "audio caption and music caption tasks."

**Variants.** The evidence frames it specifically around music clips and names it simply as music captioning. A nearby formulation groups it with audio caption tasks, but no further sub-task, domain, or modality variants are named.

**Space of elicitation and scores.** Papers link it to one measurement instrument, MusicCaps, which is recorded as measuring this behavior. The linked evidence reports BLEU4 and RougeL with MusicCaps.

**What it is taken as evidence of.** No construct is linked to this behavior in the recorded relationships.

## Sources

**[ALMTokenizer: A Low-bitrate and Semantic-rich Audio Codec Tokenizer for Audio Language Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25q/yang25q.pdf)**
> Generating descriptive text for music clips, used to evaluate the understanding capabilities of the audio tokenizer in a language model.

## Relationships

### Music captioning →
- **MusicCaps** (measurements) — *measured_by*
  > MC | MusicCaps | BLEU4, RougeL (Table 2)
  - [SALMONN: Towards Generic Hearing Abilities for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/476ab8f369e489c04187ba84f68cfa68-Paper-Conference.pdf)
