# Voice cloning
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Zero-shot text-to-speech  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats voice cloning as zero-shot text-to-speech: generating speech in a new or particular speaker's voice from text, conditioned on a short audio or speech prompt from that speaker, without speaker-specific training or assuming that speaker was seen during training. Definitions mostly agree on this zero-shot setup and on using the prompt to condition voice characteristics, while one definition states it more directly as synthesizing speech that mimics a particular person. As one formulation in VoiceCraft-X: Unifying Multilingual, Voice-Cloning Speech Synthesis and Speech Editing puts it, the task "entails generating speech in a new speaker’s voice from a short audio prompt" without having seen that speaker during training.

**Variants.** Papers use several closely related names for the behavior, most often zero-shot text-to-speech or zero-shot TTS, and also voice-cloning TTS and zero-shot speech generation. The studied settings remain within text-to-speech with reference prompts from unseen speakers, and one paper relates voice cloning to text-to-speech synthesis. One paper also places it in a multilingual setting alongside speech editing.

**Space of elicitation and scores.** Elicitation is described as text-conditioned generation with a short audio or speech prompt from an unseen speaker; one paper operationalizes zero-shot TTS as a conditional continuation task by concatenating prompting texts, target text, and prompting speech as prefix context. No measurement instrument is linked to it. Another paper notes evaluation on the VCTK dataset, but no named instrument is tied to scoring the behavior.

**What it is taken as evidence of.** In the linked construct uses, papers take voice cloning to indicate 2 constructs: Naturalness and Robustness. The construct links are limited to those 2 constructs, and both are expressed as measured_by relations to the behavior. The linked uses therefore present the behavior as evidence of naturalness and robustness, without additional construct links.

## Sources

**[VoiceCraft-X: Unifying Multilingual, Voice-Cloning Speech Synthesis and Speech Editing](https://aclanthology.org/2025.emnlp-main.137.pdf) (as "Zero-shot text-to-speech")**
> Generating speech in a new speaker's voice using only a short audio prompt from that speaker, without any speaker-specific training.

**[VoiceCraft-X: Unifying Multilingual, Voice-Cloning Speech Synthesis and Speech Editing](https://aclanthology.org/2025.emnlp-main.137.pdf)**
> The specific task of synthesizing speech that mimics the voice of a particular person, often in a zero-shot setting from a brief audio sample.

## Relationships

### Associated with
- **Text-to-speech synthesis** (behaviors tasks)
  > We apply DiTAR to zero-shot text-to-speech (TTS) that aims to generate speech from unseen speakers’ prompts. (Section 2)
  - [DiTAR: Diffusion Transformer Autoregressive Modeling for Speech Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jia25a/jia25a.pdf)
- **Robustness** (constructs)
  > In zero-shot speech generation, DiTAR achieves state-of-the-art performance in robustness, speaker similarity, and naturalness.
  - [DiTAR: Diffusion Transformer Autoregressive Modeling for Speech Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jia25a/jia25a.pdf)
- **Naturalness** (constructs)
  > In zero-shot speech generation, DiTAR achieves state-of-the-art performance in robustness, speaker similarity, and naturalness.
  - [DiTAR: Diffusion Transformer Autoregressive Modeling for Speech Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jia25a/jia25a.pdf)
