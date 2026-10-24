# Language modeling
**Type:** Behavior  
**Referenced in:** 260 papers  
**Also known as:** Masked token prediction, Pre-training performance, Autoregressive token generation, Masked token reconstruction, Autoregressive sequence modeling, Next-token prediction, Next-word prediction, Next-symbol prediction, Audio token prediction, Next-byte prediction, Token prediction, Bigram prediction, In-context n-gram prediction, Masked next-token prediction, Trigram prediction, Unigram prediction, Word prediction, Language modeling performance, Next-token generation, Multigram prediction, Code prediction, Next device pin prediction  

## State of the Field

Across the surveyed literature, language modeling is predominantly defined as the observable behavior of predicting the next unit in a sequence given the preceding context, with variations specifying this unit as a token, word, symbol, or byte. A secondary framing, found in papers like "From Tokens to Lattices", treats it as the task of predicting masked tokens from bidirectional context. A smaller set of papers conceptualizes it more abstractly as a latent "language modeling ability" or "capability" to generate plausible text. This behavior is most commonly operationalized by measuring perplexity on standard text corpora, with WikiText-2, WikiText-103, and C4 appearing as the most frequent evaluation benchmarks. Performance is also widely assessed through zero-shot accuracy on downstream tasks, including LAMBADA, MMLU, HellaSwag, and WinoGrande. The provided data also details more specific variants, such as "In-context n-gram prediction" and "Audio token prediction". Language modeling is studied alongside text generation, with one paper framing it as the process of "aligning model distribution with that of human language" (EMO: EARTH MOVER DISTANCE OPTIMIZATION FOR AUTO-REGRESSIVE LANGUAGE MODELING), and is also connected to long-context processing and factual recall.

## Sources

**[ESPACE: Dimensionality Reduction of Activations for Model Compression](https://proceedings.neurips.cc/paper_files/paper/2024/file/1f6591cc41be737e9ba4cc487ac8082d-Paper-Conference.pdf)**
> Predicting or scoring text sequences as a language model, as reflected here by perplexity evaluation.

**[From Tokens to Lattices: Emergent Lattice Structures in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/34899013589ef41aea4d7b2f0ef310c1-Paper-Conference.pdf) (as "Masked token prediction")**
> The fundamental task of a Masked Language Model, which involves predicting a masked token based on its surrounding bidirectional context.

**[Mix-LN: Unleashing the Power of Deeper Layers by Combining Pre-LN and Post-LN](https://proceedings.iclr.cc/paper_files/paper/2025/file/f3d637987f36563fa45f943f8eadc2d0-Paper-Conference.pdf) (as "Pre-training performance")**
> The observable quality of the model's language modeling capabilities during the initial pre-training phase.

**[Flash Inference: Near Linear Time Inference for Long Convolution Sequence Models and Beyond](https://proceedings.iclr.cc/paper_files/paper/2025/file/7c818dd40651b420873af70b8a790e3f-Paper-Conference.pdf) (as "Autoregressive token generation")**
> The process of generating a sequence of tokens one at a time, where each new token is conditioned on the sequence of previously generated tokens.

**[Masked Diffusion Models are Secretly Time-Agnostic Masked Models and Exploit Inaccurate Categorical Sampling](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e3b203e72c4e058de26d02a92a81844-Paper-Conference.pdf) (as "Masked token reconstruction")**
> Predicting original tokens at positions that were randomly masked in the input sequence.

**[Towards Understanding the Universality of Transformers for Next-Token Prediction](https://proceedings.iclr.cc/paper_files/paper/2025/file/d846c59be138a704e800f36e7fcb696a-Paper-Conference.pdf) (as "Autoregressive sequence modeling")**
> Using prior tokens in a sequence to estimate the next state when the sequence follows a recursive dependence on the previous state.

**[Understanding Factual Recall in Transformers via Associative Memories](https://proceedings.iclr.cc/paper_files/paper/2025/file/0bf9f909c24c8879d1b7f86fa50a9e49-Paper-Conference.pdf) (as "Next-token prediction")**
> The task of predicting the next token in a sequence given the preceding tokens.

**[How new data permeates LLM knowledge and how to dilute it](https://proceedings.iclr.cc/paper_files/paper/2025/file/0f85efb1e7545dc35a1b5e4d45aaf3c2-Paper-Conference.pdf) (as "Next-word prediction")**
> The task of predicting the next token in a sequence given the preceding tokens.

**[Training Neural Networks as Recognizers of Formal Languages](https://proceedings.iclr.cc/paper_files/paper/2025/file/7256b2c07b6980aca382eb41606501c2-Paper-Conference.pdf) (as "Next-symbol prediction")**
> The observable task of predicting, for each position in a sequence, the set of all valid symbols that could legally appear next according to the rules of a given formal language.

**[HALL-E: Hierarchical Neural Codec Language Model for Minute-Long Zero-Shot Text-to-Speech Synthesis](https://proceedings.iclr.cc/paper_files/paper/2025/file/e32aefe039c94b95505b243e4cff8aa2-Paper-Conference.pdf) (as "Audio token prediction")**
> Predicting discrete audio-token sequences from text and/or prompt audio in an autoregressive or non-autoregressive manner.

**[Exact Byte-Level Probabilities from Tokenized Language Models for FIM-Tasks and Model Ensembles](https://proceedings.iclr.cc/paper_files/paper/2025/file/5ed5c3c846f684a54975ad7a2525199f-Paper-Conference.pdf) (as "Next-byte prediction")**
> The task of predicting the next byte in a sequence given the preceding bytes.

**[Relaxed Recursive Transformers: Effective Parameter Sharing with Layer-wise LoRA](https://proceedings.iclr.cc/paper_files/paper/2025/file/54d6a55225cebbdc16fbb0e45c5bdf2b-Paper-Conference.pdf) (as "Token prediction")**
> Producing the next token from intermediate or final hidden states during language modeling or early-exit inference.

**[Learning In-context $n$-grams with Transformers: Sub-$n$-grams Are Near-Stationary Points](https://raw.githubusercontent.com/mlresearch/v267/main/assets/varre25a/varre25a.pdf) (as "In-context n-gram prediction")**
> The task of predicting the next token in a sequence based on an n-gram language model derived from the context of that same sequence.

**[Learning In-context $n$-grams with Transformers: Sub-$n$-grams Are Near-Stationary Points](https://raw.githubusercontent.com/mlresearch/v267/main/assets/varre25a/varre25a.pdf) (as "Unigram prediction")**
> The observable behavior of predicting the next token based solely on its overall frequency in the sequence, ignoring contextual dependencies.

**[Learning In-context $n$-grams with Transformers: Sub-$n$-grams Are Near-Stationary Points](https://raw.githubusercontent.com/mlresearch/v267/main/assets/varre25a/varre25a.pdf) (as "Bigram prediction")**
> The observable behavior of predicting the next token based on the immediately preceding token, capturing first-order sequential dependencies.

**[Learning In-context $n$-grams with Transformers: Sub-$n$-grams Are Near-Stationary Points](https://raw.githubusercontent.com/mlresearch/v267/main/assets/varre25a/varre25a.pdf) (as "Trigram prediction")**
> The observable behavior of predicting the next token based on the two preceding tokens, capturing second-order sequential dependencies.

**[Generative Audio Language Modeling with Continuous-valued Tokens and Masked Next-Token Prediction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25n/yang25n.pdf) (as "Masked next-token prediction")**
> A training task where a model performs next-token prediction on a sequence from which a random subset of past tokens has been dropped or masked.

**[Exploring morphology-aware tokenization: A case study on Spanish language modeling](https://aclanthology.org/2025.emnlp-main.1552.pdf) (as "Word prediction")**
> The observable behavior of predicting a missing word in a sentence, either the final word or a randomly selected non-final word, based on context.

**[Selective Attention: Enhancing Transformer through Principled Context Control](https://proceedings.neurips.cc/paper_files/paper/2024/file/14fc4a68da97a3d31eb11c642b0b10fc-Paper-Conference.pdf) (as "Language modeling performance")**
> The overall proficiency of a model in predicting the next token in a sequence, measured across various standard language benchmarks.

**[Data-adaptive Differentially Private Prompt Synthesis for In-Context Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/96d00450ed65531ffe2996daed487536-Paper-Conference.pdf) (as "Next-token generation")**
> Predicting the distribution over the next token given a prompt and previously generated text.

**[Differentiation and Specialization of Attention Heads via the Refined Local Learning Coefficient](https://proceedings.iclr.cc/paper_files/paper/2025/file/fad7c708dda11f3e72cc1629bb130379-Paper-Conference.pdf) (as "Multigram prediction")**
> The observable behavior of predicting n-grams and skip n-grams, which are common, potentially non-contiguous, sequences of tokens.

**[Differentiation and Specialization of Attention Heads via the Refined Local Learning Coefficient](https://proceedings.iclr.cc/paper_files/paper/2025/file/fad7c708dda11f3e72cc1629bb130379-Paper-Conference.pdf) (as "Code prediction")**
> The specific task of performing next-token prediction on sequences of source code.

**[AnalogGenie: A Generative Engine for Automatic Discovery of Analog Circuit Topologies](https://proceedings.iclr.cc/paper_files/paper/2025/file/f0552f14388d95b19740dee809f5cad1-Paper-Conference.pdf) (as "Next device pin prediction")**
> Generating the next pin token in a sequence that encodes a circuit topology.

## Relationships

### Language modeling →
- **WikiText-2** (measurements) — *measured_by*
  > To evaluate models trained on C4, we use three metrics: perplexity on C4 validation, perplexity on WikiText-2 (Merity et al., 2016), and 5-shot MMLU accuracy (Hendrycks et al., 2021).
  - [LQ-LoRA: Low-rank plus Quantized Matrix Decomposition for Efficient Language Model Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/d97a16cb83d74195b76e0bf1e85bf072-Paper-Conference.pdf)
- **WikiText-103** (measurements) — *measured_by*
  > training Transformer models with linear attention with the goal of matching standard Transformer performance, e.g., as tested on benchmarks such as Long Range Arena (LRA) classification (Tay et al., 2021) and WikiText-103 language modeling (Merity et al., 2017).
  - [The Hedgehog & the Porcupine: Expressive Linear Attentions with Softmax Mimicry](https://proceedings.iclr.cc/paper_files/paper/2024/file/ebba182cb97864368fdb6ae00773a5e4-Paper-Conference.pdf)
- **C4** (measurements) — *measured_by*
  > To evaluate models trained on C4, we use three metrics: perplexity on C4 validation, perplexity on WikiText-2 (Merity et al., 2016), and 5-shot MMLU accuracy (Hendrycks et al., 2021).
  - [LQ-LoRA: Low-rank plus Quantized Matrix Decomposition for Efficient Language Model Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/d97a16cb83d74195b76e0bf1e85bf072-Paper-Conference.pdf)
- **PTB** (measurements) — *measured_by*
  > Perplexity of C4, wikitext2 and PTB on LLaMA-7b quantized with PTQ methods. (Table 3)
  - [PB-LLM: Partially Binarized Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/3ab228c4703c4459b1a600ebadc5732c-Paper-Conference.pdf)
- **LAMBADA** (measurements) — *measured_by*
  > We investigate the drafts produced by this 1.5B blockwise parallel LM on LAMBADA [33] (language modeling)... (Section 4)
  - [Accelerating Blockwise Parallel Language Models with Draft Refinement](https://proceedings.neurips.cc/paper_files/paper/2024/file/3c9629e718d931e8d4d240378aa1d3bf-Paper-Conference.pdf)
- **WikiText** (measurements) — *measured_by*
  > Following previous works on LLM compression (Xiao et al., 2023; Frantar & Alistarh, 2023), we evaluate the perplexity on the held-out WikiText (Merity et al., 2016) validation set.
  - [A Simple and Effective Pruning Approach for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/14c856c7a41297804de4c4890e846b25-Paper-Conference.pdf)
- **PG-19** (measurements) — *measured_by*
  > “Auto-regressive Language Modeling on the medium-scale PG19 (Rae et al., 2019) datasets.”
  - [Megalodon: Efficient LLM Pretraining and Inference with Unlimited Context Length](https://proceedings.neurips.cc/paper_files/paper/2024/file/840abfadd04c967feaa2a49aba94a32d-Paper-Conference.pdf)
- **OpenWebText** (measurements) — *measured_by*
  > DDPD outperforms traditional denoiser-only mask diffusion methods, achieving superior results on language modeling benchmarks such as text8, OpenWebText... (Section 1)
  - [Think while You Generate: Discrete Diffusion with Planned Denoising](https://proceedings.iclr.cc/paper_files/paper/2025/file/cbf883a744952d4a40591271a58ab9d0-Paper-Conference.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > To ease reproducibility of our numbers, we use Eleuther-AI’s lm-evaluation-harness library (Gao et al., 2021) for evaluating perplexities on the Pile. (Section 5)
  - [Test-Time Training on Nearest Neighbors for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/f02f1185b97518ab5bd7ebde466992d3-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > To evaluate models trained on C4, we use three metrics: perplexity on C4 validation, perplexity on WikiText-2 (Merity et al., 2016), and 5-shot MMLU accuracy (Hendrycks et al., 2021).
  - [LQ-LoRA: Low-rank plus Quantized Matrix Decomposition for Efficient Language Model Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/d97a16cb83d74195b76e0bf1e85bf072-Paper-Conference.pdf)
- **WinoGrande** (measurements) — *measured_by*
  > Our evaluations on the NLP benchmarks of Wikitext [27], Lambada [32], Piqa [4], Hella [51], Winogrande [38], Arc-E, and Arc-C [10] demonstrate that Selective Attention noticeably improves language modeling performance.
  - [Selective Attention: Enhancing Transformer through Principled Context Control](https://proceedings.neurips.cc/paper_files/paper/2024/file/14fc4a68da97a3d31eb11c642b0b10fc-Paper-Conference.pdf)
- **Proof-pile** (measurements) — *measured_by*
  > we perform the classic language modeling evaluation, i.e., perplexity evaluation, on GovReport [Huang et al., 2021] and Proof-pile [Zhangir Azerbayev, 2022]. (Section 3.5).
  - [An Efficient Recipe for Long Context Extension via Middle-Focused Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/66944d3a3e77ebe366793f6a6126f3a4-Paper-Conference.pdf)
- **The Pile** (measurements) — *measured_by*
  > For perplexity, we evaluate the models using the testing set of WikiText2 (Merity et al., 2016) and a randomly sampled subset from validation set of Pile dataset (Gao et al., 2021). (Section 5.1)
  - [Quamba: A Post-Training Quantization Recipe for Selective State Space Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb4b2fb2434f7cce5cb5ab50271296ee-Paper-Conference.pdf)
- **PIQA** (measurements) — *measured_by*
  > Our evaluations on the NLP benchmarks of Wikitext [27], Lambada [32], Piqa [4], Hella [51], Winogrande [38], Arc-E, and Arc-C [10] demonstrate that Selective Attention noticeably improves language modeling performance.
  - [Selective Attention: Enhancing Transformer through Principled Context Control](https://proceedings.neurips.cc/paper_files/paper/2024/file/14fc4a68da97a3d31eb11c642b0b10fc-Paper-Conference.pdf)
- **ARC-Easy** (measurements) — *measured_by*
  > Our evaluations on the NLP benchmarks of Wikitext [27], Lambada [32], Piqa [4], Hella [51], Winogrande [38], Arc-E, and Arc-C [10] demonstrate that Selective Attention noticeably improves language modeling performance.
  - [Selective Attention: Enhancing Transformer through Principled Context Control](https://proceedings.neurips.cc/paper_files/paper/2024/file/14fc4a68da97a3d31eb11c642b0b10fc-Paper-Conference.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > Our evaluations on the NLP benchmarks of Wikitext [27], Lambada [32], Piqa [4], Hella [51], Winogrande [38], Arc-E, and Arc-C [10] demonstrate that Selective Attention noticeably improves language modeling performance.
  - [Selective Attention: Enhancing Transformer through Principled Context Control](https://proceedings.neurips.cc/paper_files/paper/2024/file/14fc4a68da97a3d31eb11c642b0b10fc-Paper-Conference.pdf)
- **Text8** (measurements) — *measured_by*
  > We first evaluate DDPD on the small-scale character-level text modeling benchmark, text8 [30] (Section 6)
  - [Think while You Generate: Discrete Diffusion with Planned Denoising](https://proceedings.iclr.cc/paper_files/paper/2025/file/cbf883a744952d4a40591271a58ab9d0-Paper-Conference.pdf)
- **LM1B** (measurements) — *measured_by*
  > We also ran experiments with WikiText (Merity et al., 2016), and lm1b (Chelba et al., 2014) and observed similar results. (Section 5)
  - [Selective Attention Improves Transformer](https://proceedings.iclr.cc/paper_files/paper/2025/file/0cf3e7eefb9d643e93e16ff1d94090a7-Paper-Conference.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > To validate the performance of different models, we used some benchmarks for the 3B and 19B models that were trained more tokens, including Lambada(Paperno et al., 2016), Winogrande(Sakaguchi et al., 2021), Hellaswag(Zellers et al., 2019), ARC(Clark et al., 2018), CMMLU(Li et al., 2023a), MMLU(Hendrycks et al.), Math(Hendrycks et al., 2021). (Section 4.1)
  - [KV Shifting Attention Enhances Language Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25ac/xu25ac.pdf)
- **TinyStories** (measurements) — *measured_by*
  > we ﬁnd that for 79% ... of LLM next-token distributions on TinyStories ... their top-1 predictions agree with those provided by our N -gram rulesets. (Abstract)
  - [Understanding Transformers via N-Gram Statistics](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1c446eebd9a317dd0e96b16908c821a-Paper-Conference.pdf)
- **Wikipedia** (measurements) — *measured_by*
  > we ﬁnd that for ... 68% of LLM next-token distributions on ... Wikipedia, respectively, their top-1 predictions agree with those provided by our N -gram rulesets. (Abstract)
  - [Understanding Transformers via N-Gram Statistics](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1c446eebd9a317dd0e96b16908c821a-Paper-Conference.pdf)
- **SlimPajama** (measurements) — *measured_by*
  > We perform moderate-scale language modeling experiments with 1.3B and 2.7B parameters on Slimpajama corpus [79] for 100B tokens each. (Section 4.1)
  - [Gated Slot Attention for Efficient Linear-Time Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3f39e51f5f634fb16cc3e658f8512b9-Paper-Conference.pdf)
- **RedPajama** (measurements) — *measured_by*
  > We evaluate language modeling perplexity on data from two domains: (1) general web data sampled from REDPAJAMA (Computer, 2023); (2) scientific paper data sampled from S2ORC (Lo et al., 2020). (Section 4.1)
  - [Scaling Retrieval-Based Language Models with a Trillion-Token Datastore](https://proceedings.neurips.cc/paper_files/paper/2024/file/a5d8aba27dfef4e849e8cb03fb87a954-Paper-Conference.pdf)
- **Alpaca instruction dataset** (measurements) — *measured_by*
  > When training the hypernetwork, we again minimize the language modeling loss on the Alpaca dataset instead of applying the training process of instruction fine-tuning. (Appendix A.4)
  - [DISP-LLM: Dimension-Independent Structural Pruning for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/84a7fc24ed52e8eff514c33e8ac76ea3-Paper-Conference.pdf)
- **GLUE** (measurements) — *measured_by*
  > We conducted an evaluation of Orchid-BERT models on GLUE fine-tuning tasks, comparing them against the baseline models: BERT-base and BERT-large... (Section 4.2)
  - [Orchid: Flexible and Data-Dependent Convolution for Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/8ccc5ec30a8d46793d790e2216efd40d-Paper-Conference.pdf)
- **Planning** (constructs) — *causes*
  > In this paper, we initiate a theoretical investigation into the emergence of planning capabilities in Transformer-based LLMs via their next-word prediction mechanisms.
  - [ALPINE: Unveiling The Planning Capability of Autoregressive Learning in Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d848cb2c84f0bba7f1f73cf232734c40-Paper-Conference.pdf)
- **GovReport** (measurements) — *measured_by*
  > we perform the classic language modeling evaluation, i.e., perplexity evaluation, on GovReport [Huang et al., 2021] and Proof-pile [Zhangir Azerbayev, 2022]. (Section 3.5).
  - [An Efficient Recipe for Long Context Extension via Middle-Focused Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/66944d3a3e77ebe366793f6a6126f3a4-Paper-Conference.pdf)
- **Image captioning** (behaviors tasks) — *causes*
  > The model is trained with next token prediction objective, to generate text conditioned on images in an auto-regressive fashion. In this work we focus on models trained to "translate" images into text, or image captioning models.
  - [A Concept-Based Explainability Framework for Large Multimodal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/f4fba41b554f9aaa013c4062a1c40518-Paper-Conference.pdf)
- **BabiStories** (measurements) — *measured_by*
  > Figure 7 shows the training and validation curves of both transformers and Memory Mosaics of different depth trained on BABISTORIES.
  - [Memory Mosaics](https://proceedings.iclr.cc/paper_files/paper/2025/file/59c3ac496e6fe7be0c2c2b95014e2210-Paper-Conference.pdf)
- **DCLM** (measurements) — *measured_by*
  > We also report the LM’s language modeling loss on a subset of DCLM (Li et al., 2024), a high-quality corpus curated with complex pipelines and human heuristics, to verify that models trained on D′ retain diversity and long-tail knowledge coverage. (Section 3.1)
  - [Data Selection via Optimal Control for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/9ad4891facabf17aa11580686bacfe4e-Paper-Conference.pdf)
- **BLiMP** (measurements) — *measured_by*
  > "All models were evaluated on a common evaluation measure: BLiMP (Warstadt et al., 2020)."
  - [TopoNets: High performing vision and language models with brain-like topography](https://proceedings.iclr.cc/paper_files/paper/2025/file/6191ab7080c840f67eaf5dff7d5edfcb-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > TOW views next-word prediction as a core reasoning task and injects fine-grained thoughts explaining what the next word should be and how it is related to the previous contexts in pre-training texts (Abstract).
  - [ToW: Thoughts of Words Improve Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.157.pdf)
- **Prompt sensitivity** (constructs) — *causes*
  > We posit that this sole reliance on the next token may contribute to prompt brittleness, based on the following intuitions... (Section 1)
  - [Beyond the Next Token: Towards Prompt-Robust Zero-Shot Classification via Efficient Multi-Token Prediction](https://aclanthology.org/2025.naacl-long.363.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > because each next word is treated equally, models tend to form associations between co-occurring words. As a result, they may hallucinate words commonly associated with the context to solve a problem inherently irrelevant to these words (confirmation bias) (Section 1).
  - [ToW: Thoughts of Words Improve Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.157.pdf)
- **CodeParrot** (measurements) — *measured_by*
  > Language modeling, for which we evaluate perplexity on PG19 (Rae et al., 2020), Proof-Pile (Zhangir Azerbayev), and CodeParrot (CodeParrot) (Section 3.1)
  - [A Silver Bullet or a Compromise for Full Attention? A Comprehensive Study of Gist Token-based Context Compression](https://aclanthology.org/2025.acl-long.241.pdf)
- **ARC** (measurements) — *measured_by*
  > To validate the performance of different models, we used some benchmarks for the 3B and 19B models that were trained more tokens, including Lambada(Paperno et al., 2016), Winogrande(Sakaguchi et al., 2021), Hellaswag(Zellers et al., 2019), ARC(Clark et al., 2018), CMMLU(Li et al., 2023a), MMLU(Hendrycks et al.), Math(Hendrycks et al., 2021). (Section 4.1)
  - [KV Shifting Attention Enhances Language Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25ac/xu25ac.pdf)
- **CMMLU** (measurements) — *measured_by*
  > To validate the performance of different models, we used some benchmarks for the 3B and 19B models that were trained more tokens, including Lambada(Paperno et al., 2016), Winogrande(Sakaguchi et al., 2021), Hellaswag(Zellers et al., 2019), ARC(Clark et al., 2018), CMMLU(Li et al., 2023a), MMLU(Hendrycks et al.), Math(Hendrycks et al., 2021). (Section 4.1)
  - [KV Shifting Attention Enhances Language Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25ac/xu25ac.pdf)
- **MATH** (measurements) — *measured_by*
  > To validate the performance of different models, we used some benchmarks for the 3B and 19B models that were trained more tokens, including Lambada(Paperno et al., 2016), Winogrande(Sakaguchi et al., 2021), Hellaswag(Zellers et al., 2019), ARC(Clark et al., 2018), CMMLU(Li et al., 2023a), MMLU(Hendrycks et al.), Math(Hendrycks et al., 2021). (Section 4.1)
  - [KV Shifting Attention Enhances Language Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25ac/xu25ac.pdf)
- **PubMed** (measurements) — *measured_by*
  > The downstream generative tasks are evaluated by the next-word prediction accuracy, which needs the synthetic data to preserve ﬁne-grained textual information from the private data. (Section 4.1.1)
  - [Synthesizing Privacy-Preserving Text Data via Finetuning *without* Finetuning Billion-Scale LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25g/tan25g.pdf)
- **Chatbot Arena** (measurements) — *measured_by*
  > The downstream generative tasks are evaluated by the next-word prediction accuracy, which needs the synthetic data to preserve ﬁne-grained textual information from the private data. (Section 4.1.1)
  - [Synthesizing Privacy-Preserving Text Data via Finetuning *without* Finetuning Billion-Scale LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25g/tan25g.pdf)
- **Open LLM Leaderboard v2** (measurements) — *measured_by*
  > We start by benchmarking xLSTM 7B against state-of-the-art Transformer and recurrent LLMs on the 7B parameter scale. To this end, we evaluate the performance on the Open LLM Leaderboard v2 using the LM Evaluation Harness (Gao et al., 2024; Fourrier et al., 2024). (Section 5.1)
  - [xLSTM 7B: A Recurrent LLM for Fast and Efficient Inference](https://raw.githubusercontent.com/mlresearch/v267/main/assets/beck25b/beck25b.pdf)

### → Language modeling
- **Expressive power** (constructs) — *causes*
  > a larger vocabulary enhances the representational capacity of the feature mapping, thereby positively impacting the model. (Section 3.1)
  - [Over-Tokenized Transformer: Vocabulary is Generally Worth Scaling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25bb/huang25bb.pdf)
- **In-context learning** (constructs) — *causes*
  > ICL thus helps next-token prediction using information provided solely in the input prompt context. (Section 2)
  - [Linking In-context Learning in Transformers to Human Episodic Memory](https://proceedings.neurips.cc/paper_files/paper/2024/file/0ba385c3ea3bb417ac6d6a33e24411bc-Paper-Conference.pdf)
- **Future prediction** (behaviors tasks) — *causes*
  > to perform as well as possible on next-token prediction requires that all information about the past necessary to predict the entire future as well as possible must be present across the layers of each context window position’s residual stream. (Section 4.1)
  - [Transformers Represent Belief State Geometry in their Residual Stream](https://proceedings.neurips.cc/paper_files/paper/2024/file/8936fa1691764912d9519e1b5673ea66-Paper-Conference.pdf)
- **Downstream task performance** (behaviors tasks) — *correlates*
  > To connect loss scaling and downstream error prediction, we observe that average top-1 error decreases exponentially as a function of validation loss, which we formalize as a novel scaling law (Section 2.3).
  - [Language models scale reliably with over-training and on downstream tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/a91869936a63d814971b6423990ecf6e-Paper-Conference.pdf)
- **Early exiting** (behaviors tasks) — *causes*
  > The throughput of Recursive Transformers can be amplified by an early-exiting framework. Hence, we further train intermediate representations from fewer looping iterations to enable token prediction. (Section 3.7)
  - [Relaxed Recursive Transformers: Effective Parameter Sharing with Layer-wise LoRA](https://proceedings.iclr.cc/paper_files/paper/2025/file/54d6a55225cebbdc16fbb0e45c5bdf2b-Paper-Conference.pdf)

### Associated with
- **Length generalization** (constructs)
  > First, we examine its extrapolation capability in decoder-only models for next-token prediction, comparing it against several representative RPEs as well as commonly used APEs. (Section 5)
  - [Context-aware Biases for Length Extrapolation](https://aclanthology.org/2025.emnlp-main.1545.pdf)
- **Code generation** (behaviors tasks)
  > When it comes to some tasks, especially code generation as in the pile github task, the bits per byte metric goes down by more than 60% during test-time training. (Section 1.1)
  - [Test-Time Training on Nearest Neighbors for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/f02f1185b97518ab5bd7ebde466992d3-Paper-Conference.pdf)
- **Integer addition** (behaviors tasks)
  > With the input format described in Section 3.1, there exists a depth-1 two-head decoder-only Transformer with coupled positions that solves the addition task with next-token prediction. (Theorem 5.1)
  - [Position Coupling: Improving Length Generalization of Arithmetic Transformers Using Task Structure](https://proceedings.neurips.cc/paper_files/paper/2024/file/27aa3a0e6d63db269977bb2df5607cb8-Paper-Conference.pdf)
- **Formal language recognition** (behaviors tasks)
  > To this end, we include experiments that add one or both of the following auxiliary loss terms to the training objective for positive examples: (1) a language modeling loss term, LLM(M, w), which requires the model to learn a distribution over the next symbol at each position, and (2) a next-symbol prediction loss term, LNS(M, w) (Section 3.3)
  - [Training Neural Networks as Recognizers of Formal Languages](https://proceedings.iclr.cc/paper_files/paper/2025/file/7256b2c07b6980aca382eb41606501c2-Paper-Conference.pdf)
- **Sequence modeling** (constructs)
  > Modern large language models are built on sequence modeling via next-token prediction. (Abstract)
  - [Longhorn: State Space Models are Amortized Online Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/ee0e45ff4de76cbfdf07015a7839f339-Paper-Conference.pdf)
- **In-context reasoning** (constructs)
  > we decompose tasks of next-token prediction into the distributional and the in-context ones (Figure 1).
  - [Distributional Associations vs In-Context Reasoning: A Study of Feed-forward and Attention Layers](https://proceedings.iclr.cc/paper_files/paper/2025/file/533a89d7c2980218d82dbe3ea85f77ae-Paper-Conference.pdf)
- **Factual recall** (behaviors tasks)
  > "We next introduce a synthetic next-token prediction task which models factual recall."
  - [Understanding Factual Recall in Transformers via Associative Memories](https://proceedings.iclr.cc/paper_files/paper/2025/file/0bf9f909c24c8879d1b7f86fa50a9e49-Paper-Conference.pdf)
- **Multimodal alignment** (constructs)
  > "we consider preference tuning as a decision-making process undertaken by an agent. In this context, after observing the input text and image, a VLLM policy πθ takes actions by predicting the next token."
  - [Fine-Grained Verifiers: Preference Modeling as Next-token Prediction in Vision-Language Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/7c1f8ca17d2f0bdf82c73abafb577837-Paper-Conference.pdf)
- **Text generation** (behaviors tasks)
  > “in language generation, x is a sequence of tokens t1 · · · tk, y is the next token tk+1”
  - [Portable Reward Tuning: Towards Reusable Fine-Tuning across Different Pretrained Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chijiwa25a/chijiwa25a.pdf)
- **Fluency** (constructs)
  > “we investigate the language modeling fluency of HOMER using the perplexity metric”
  - [Hierarchical Context Merging: Better Long Context Understanding for Pre-trained LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/06694da057cb15fef11542270a592627-Paper-Conference.pdf)
