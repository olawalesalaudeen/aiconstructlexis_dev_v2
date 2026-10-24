# Text-to-audio generation
**Type:** Behavior  
**Referenced in:** 6 papers  
**Also known as:** Text-to-sound generation  

## State of the Field

**Space of definitions.** Across the surveyed work, the dominant framing is generating audio from a textual or natural language prompt. Most definitions describe success as producing a novel audio clip or relevant sound that corresponds to the prompt, and one paper states the output more explicitly as an audio waveform or spectrogram. A narrower formulation limits the target to non-speech audio, such as environmental sounds.

**Variants.** Papers use several closely related names for the behavior. The prevailing labels are text-to-audio generation and Text2Audio, some authors also call it text-guided audio generation, and a smaller line of work uses text-to-sound when focusing on non-speech outputs such as environmental sounds.

**Space of elicitation and scores.** Only one measurement instrument is linked to this behavior, AudioCaps. One paper reports evaluating it on the AC evaluation set, following the AudioLDM protocol and using its evaluation toolkit, so the recorded operationalization is through an evaluation set for generated audio outputs.

**What it is taken as evidence of.** No surveyed paper links this behavior to a construct, so the literature here does not specify what it is evidence of.

## Sources

**[MixEval-X: Any-to-any Evaluations from Real-world Data Mixture](https://proceedings.iclr.cc/paper_files/paper/2025/file/6de2e84b8da47bb2eb5e2ac96c63d2b0-Paper-Conference.pdf)**
> The observable task of generating a novel audio clip that corresponds to a given textual description.

**[ALMTokenizer: A Low-bitrate and Semantic-rich Audio Codec Tokenizer for Audio Language Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25q/yang25q.pdf) (as "Text-to-sound generation")**
> Generating non-speech audio (e.g., environmental sounds) from textual descriptions using an audio language model.

## Relationships

### Text-to-audio generation →
- **AudioCaps** (measurements) — *measured_by*
  > We evaluate our model on the AC evaluation set, following the protocol in AudioLDM and using its evaluation toolkit10. (Section 5)
  - [Generative Audio Language Modeling with Continuous-valued Tokens and Masked Next-Token Prediction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25n/yang25n.pdf)
