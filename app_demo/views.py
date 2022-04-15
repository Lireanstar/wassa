import random
import os
import pandas as pd
from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from django.template import loader
import time
import numpy as np
from PIL import Image
import os
from django.shortcuts import render
from dwebsocket.decorators import accept_websocket,require_websocket
from django.http import HttpResponse
from transformers import AutoTokenizer
import torch.nn as nn
def image(request,id):
    file = open(r'./app_demo/templates/image/{}.png'.format(id),'rb')
    return HttpResponse(file.read(), content_type='image/jpg')
def cssmin(request,id):
    file = open(r'./app_demo/templates/css/{}.min.css'.format(id),'rb')
    return HttpResponse(file.read(),content_type='text/css')
def jsmin(request,id):
    file = open(r'./app_demo/templates\js/{}.min.js'.format(id),'rb')
    return HttpResponse(file.read(),content_type='text/js')
def css(request,id):
    file = open(r'./app_demo/templates/css/{}.css'.format(id),'rb')
    return HttpResponse(file.read(),content_type='text/css')
def js(request,id):
    file = open(r'./app_demo/templates/js/{}.js'.format(id),'rb')
    return HttpResponse(file.read(),content_type='text/js')

from transformers import DebertaV2ForSequenceClassification,DebertaV2PreTrainedModel,DebertaV2Config,DebertaV2Model
class Debertaforiri(DebertaV2PreTrainedModel):
    def __init__(self, config: DebertaV2Config):
        super().__init__(config)
        self.deberta = DebertaV2Model(config)
        self.dropout = nn.Dropout(config.hidden_dropout_prob)
        self.classifier = nn.Linear(config.hidden_size, 4)
        self.init_weights()

    def forward(
            self,
            input_ids=None,
            attention_mask=None,
            token_type_ids=None,
    ):
        outputs = self.deberta(
            input_ids,
            attention_mask=attention_mask,
            token_type_ids=token_type_ids,
        )
        sequence_output = outputs[0]
        logits = self.classifier(sequence_output.mean(1)).softmax(1)
        return logits*6+1
class Debertaforper(DebertaV2PreTrainedModel):
    def __init__(self, config: DebertaV2Config):
        super().__init__(config)
        self.deberta = DebertaV2Model(config)
        self.dropout = nn.Dropout(config.hidden_dropout_prob)
        self.classifier = nn.Linear(config.hidden_size, 5)
        self.init_weights()

    def forward(
            self,
            input_ids=None,
            attention_mask=None,
            token_type_ids=None,
    ):
        outputs = self.deberta(
            input_ids,
            attention_mask=attention_mask,
            token_type_ids=token_type_ids,
        )
        sequence_output = outputs[0]
        logits = self.classifier(sequence_output.mean(1)).softmax(1)
        return logits*6+1
wassa_tokenizer = AutoTokenizer.from_pretrained(r'microsoft/deberta-v3-large')
per_model = Debertaforper.from_pretrained(r'microsoft/deberta-v3-large')
iri_model = Debertaforiri.from_pretrained(r'microsoft/deberta-v3-large')

@accept_websocket
def LingShigen(request):
    for message in request.websocket:
        message = str(message, 'utf-8')

        input_ids = wassa_tokenizer(message[:300],return_tensors='pt')
        per = per_model(**input_ids)[0]
        iri = iri_model(**input_ids)[0]

        send_message = 'Conscientiousness:{} </br>Openess:{} </br>Extraversion:{} </br>Agreeableness:{} </br>Stability:{} </br>Taking:{} </br>Distress:{} </br>Fantasy:{} </br>Concern:{}'.format(round(per[0].item(),2),round(per[1].item(),2),round(per[2].item(),2),round(per[3].item(),2),round(per[4].item(),2),round(iri[0].item(),2),round(iri[1].item(),2),round(iri[2].item(),2),round(iri[3].item(),2))
        request.websocket.send(send_message.encode('utf-8'))

def LingShi(request):

    template = loader.get_template('app_demo/index_ls.html')
    context = {'name':'','num':''}
    return HttpResponse(template.render(context,request))