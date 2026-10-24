# Speech reconstruction
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Audio reconstruction  

## State of the Field

**Space of definitions.** Across definitions, the dominant framing treats this behavior as reconstructing a speech waveform from discrete tokens produced by a codec or generative model. A smaller line of work uses the broader label audio reconstruction, described as recovering a waveform or perceptually similar audio signal from compressed discrete tokens, and another formulation describes regenerating the original speech signal from intermediate representations such as semantic tokens and learned variational features. Success is described through how much information is preserved in the representations and through the fidelity and quality of the resynthesized speech.

**Variants.** Papers study it with different source representations and output targets: clean acoustic tokens are decoded back into enhanced speech signals, original speech is reconstructed from Zc and Zd, and audio is reconstructed from quantized query tokens or other generated discrete token sequences. The recurring names are speech reconstruction and, less often, audio reconstruction, spanning speech-focused and broader audio settings.

**Space of elicitation and scores.** Papers link this behavior to one measurement instrument, LibriSpeech, using its test set for speech reconstruction evaluation. Beyond that named instrument, evaluation is described with reconstruction metrics that indicate how much information is preserved, alongside both subjective and objective metrics; one report characterizes resynthesized speech by low WER and high speaker similarity.

**What it is taken as evidence of.** Papers do not link this behavior to any construct.

## Sources

**[GenSE: Generative Speech Enhancement via Language Models using Hierarchical Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/acde98fb254b8021d194ccdb80a1241e-Paper-Conference.pdf)**
> Reconstructing a speech waveform from discrete tokens produced by a codec or generative model.

**[ALMTokenizer: A Low-bitrate and Semantic-rich Audio Codec Tokenizer for Audio Language Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25q/yang25q.pdf) (as "Audio reconstruction")**
> Recovering a waveform or perceptually similar audio signal from compressed discrete tokens.

## Relationships

### Speech reconstruction →
- **LibriSpeech** (measurements) — *measured_by*
  > We randomly sample 300 speech samples from LibriSpeech test set for speech reconstruction evaluation. (Section 4.2)
  - [SpeechTokenizer: Unified Speech Tokenizer for Speech Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/86d1ab582afb247ccaa84bec4a7e24f7-Paper-Conference.pdf)
- **ViSQOL** (measurements) — *measured_by*
  > We use ViSQOL metrics (Hines et al., 2012) to measure the speech quality. (Section 4.2)
  - [SpeechTokenizer: Unified Speech Tokenizer for Speech Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/86d1ab582afb247ccaa84bec4a7e24f7-Paper-Conference.pdf)
